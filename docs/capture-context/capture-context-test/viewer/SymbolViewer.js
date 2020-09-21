class SymbolViewer extends AbstractViewer {
    constructor() {
        super()
        this.createdPages = {}
        //this.symbolIDs = {} // layer indexes ( in pages[].layers ) of symbols
        this.currentLib = ""
        this.selected = null
        this.showSymbols = false
    }

    initialize(force = false) {
        if (!force && this.inited) return

        // populate library select
        const libSelect = $('#symbol_viewer #lib_selector')
        libSelect.append($('<option>', {
            value: "",
            text: 'Library autoselection'
        }));
        for (const libName of Object.keys(SYMBOLS_DICT)) {
            libSelect.append($('<option>', {
                value: libName,
                text: libName
            }));
        }
        libSelect.change(function () {
            var libName = $(this).children("option:selected").val();
            viewer.symbolViewer._selectLib(libName)

        })
        //
        const symCheck = $('#symbol_viewer_symbols')
        symCheck.click(function () {
            viewer.symbolViewer._setSymCheck($(this).is(':checked'))

        })

        this.inited = true
    }

    _setSymCheck(showSymbols) {
        this.showSymbols = showSymbols
        $('#lib_selector').toggle()
        this._reShowContent()

    }

    // called by Viewer
    pageChanged() {
        this._buildSymbolLinks()
    }

    _selectLib(libName) {
        this.currentLib = libName
        this._reShowContent()
    }

    _reShowContent() {
        delete this.createdPages[viewer.currentPage.index]

        // remove existing symbol links
        this.page.linksDiv.children(".modalSymbolLink,.symbolLink").remove()
        for (const panel of this.page.fixedPanels) {
            panel.linksDiv.children(".modalSymbolLink,.symbolLink").remove()
        }

        // redraw inspector
        this._showEmptyContent()

        // rebuild links
        this._buildSymbolLinks()
    }


    toggle() {
        return this.visible ? this.hide() : this.show()
    }



    _hideSelf() {
        var isModal = viewer.currentPage && viewer.currentPage.isModal
        if (isModal) {
            $(".modalSymbolLink").remove()
            delete this.createdPages[viewer.currentPage.index]
        }
        const contentDiv = isModal ? $('#content-modal') : $('#content')
        contentDiv.removeClass("contentSymbolsVisible")

        viewer.linksDisabled = false
        $('#symbol_viewer').addClass("hidden")

        this.setSelected(null, null)

        super._hideSelf()
    }

    onContentClick() {
        this.setSelected(null)
        return true
    }

    handleKeyDown(jevent) {

        const event = jevent.originalEvent

        if (77 == event.which) { // m
            // Key "M" eactivates Symbol Viewer
            this.toggle()
        } else {
            return super.handleKeyDown(jevent)
        }

        jevent.preventDefault()
        return true
    }

    handleKeyDownWhileInactive(jevent) {
        const event = jevent.originalEvent

        if (77 == event.which) { // m
            // Key "M" activates Symbol Viewer
            this.toggle()
        } else {
            return super.handleKeyDownWhileInactive(jevent)
        }

        jevent.preventDefault()
        return true
    }

    _showSelf() {
        if (!this.inited) this.initialize()

        viewer.toggleLinks(false)
        viewer.toogleLayout(false)
        viewer.linksDisabled = true

        this._buildSymbolLinks()

        var isModal = viewer.currentPage && viewer.currentPage.isModal
        const contentDiv = isModal ? $('#content-modal') : $('#content')
        contentDiv.addClass("contentSymbolsVisible")

        this._showEmptyContent()

        $('#symbol_viewer').removeClass("hidden")

        super._showSelf()

    }

    _showEmptyContent() {
        $("#symbol_viewer_content").html("")
        $('#symbol_viewer #empty').removeClass("hidden")
    }

    _buildSymbolLinks() {
        this._showPage(viewer.currentPage)
        for (let overlay of viewer.currentPage.currentOverlays) {
            this._showPage(overlay)
        }
    }


    _showPage(page) {
        var pageIndex = page.index
        this.pageIndex = pageIndex
        this.page = page
        if (!(pageIndex in this.createdPages)) {
            const newPageInfo = {
                layerArray: [],
                siLayerIndexes: {}
            }
            // cache only standalone pages
            this.createdPages[pageIndex] = newPageInfo

            this.pageInfo = newPageInfo
            this._create()
        } else {
            this.pageInfo = this.createdPages[pageIndex]
        }
    }



    _create() {
        const layers = layersData[this.pageIndex].c
        if (this.showSymbols)
            this._processSymbolList(layers)
        else
            this._processLayerList(layers)
    }

    _processSymbolList(layers, isParentSymbol = false) {
        for (var l of layers.reverse()) {
            if (this.currentLib != "") {
                if (this.showSymbols && l.b) {
                    if (l.b == this.currentLib) {
                        this._showElement(l)
                        continue
                    }
                }
                if (!this.showSymbols && undefined != l.l) {
                    const styleInfo = this._findStyleAndLibByStyleName(l.l)
                    if (styleInfo && styleInfo.libName == this.currentLib) {
                        this._showElement(l)
                        continue
                    }
                }
            } else {
                if ((this.showSymbols && l.s != undefined) ||
                    (!this.showSymbols && !isParentSymbol && l.l != undefined)) {
                    this._showElement(l)
                }
            }
            this._processSymbolList(l.c, this.showSymbols && l.s != undefined)
        }
    }

    _processLayerList(layers, sSI = null) {
        const supportedTypes = ["Text", "ShapePath", "Image"]
        for (var l of layers.reverse()) {
            if (supportedTypes.indexOf(l.tp) >= 0) {
                this._showElement(l, sSI)
            } else {
                this._processLayerList(l.c, "SI" == l.tp ? l : sSI)
            }
        }
    }

    _showElement(l, siLayer = null) {

        if (l.n != null && l.n == "What are you selling") {
            l = l
        }

        var currentPanel = this.page
        l.finalX = l.x
        l.finalY = l.y

        for (const panel of this.page.fixedPanels) {
            if (l.x >= panel.x && l.y >= panel.y &&
                ((l.x + l.w) <= (panel.x + panel.width)) && ((l.y + l.h) <= (panel.y + panel.height))
            ) {
                l.finalX = l.x - panel.x
                l.finalY = l.y - panel.y
                currentPanel = panel
                break
            }
        }
        l.parentPanel = currentPanel


        // Check if some layer on top of current
        for (const pl of this.pageInfo.layerArray) {
            if (pl.finalX <= l.finalX && pl.finalY <= l.finalY && (pl.finalX + pl.w) >= (l.finalX + l.w) && (pl.finalY + pl.h) >= (l.finalY + l.h)) return
        }

        // Check if layer is empty
        if ("Text" == l.tp) {
            if ("" == l.tx.trim()) return
        }

        // also push symbol instance to a list of layers (if was not aded before)
        let indexOfSO = -1
        if (siLayer) {
            if (siLayer.s in this.pageInfo.siLayerIndexes) {
                indexOfSO = this.pageInfo.siLayerIndexes[siLayer.s]
            } else {
                indexOfSO = this.pageInfo.layerArray.length
                this.pageInfo.layerArray.push(siLayer)
            }
        }
        //

        l.infoIndex = this.pageInfo.layerArray.length
        this.pageInfo.layerArray.push(l)

        var a = $("<a>", {
            class: viewer.currentPage.isModal ? "modalSymbolLink" : "symbolLink",
            pi: this.pageIndex,
            li: l.infoIndex,
            si: indexOfSO
        })

        a.click(function () {
            const sv = viewer.symbolViewer
            const pageIndex = $(this).attr("pi")
            const layerIndex = $(this).attr("li")
            const siLayerIndex = $(this).attr("si")
            const pageInfo = sv.createdPages[pageIndex]
            const layer = pageInfo.layerArray[layerIndex]
            const siLayer = siLayerIndex >= 0 ? pageInfo.layerArray[siLayerIndex] : null

            sv.setSelected(layer, $(this))

            var symName = sv.showSymbols ? layer.s : (siLayer ? siLayer.s : null)
            var styleName = layer.l
            var comment = layer.comment
            var frameX = layer.finalX
            var frameY = layer.finalY
            var frameWidth = layer.w
            var frameHeight = layer.h

            const styleInfo = styleName != undefined ? viewer.symbolViewer._findStyleAndLibByStyleName(styleName) : undefined
            const symInfo = symName != undefined ? viewer.symbolViewer._findSymbolAndLibBySymbolName(symName) : undefined

            var info = ""
            // layer.b : shared library name, owner of style or symbol
            // layer.s : symbol name
            // layer.l : style name
            // layer.tp : layer type: SI, Text, ShapePath or Image
            // siLayer : symbol master, owner of the layer            

            if (symName != undefined) {
                info = "<hr>" +
                    "<div class='block'>" +
                    "<div class='label'>" + "Symbol" + "</div>" +
                    "<div class='value'>" + symName + "</div>"
                const libName = layer.b != undefined ? (layer.b + " (external)") :
                    (siLayer && siLayer.b ? siLayer.b + " (external)" : "Document")
                info += "<div style='font-size:12px; color:var(--color-secondary)'>" + libName + "</div></div>"

            }
            if (styleName != undefined) {
                info = "<hr>" +
                    "<div class='block'>" +
                    "<div class='label'>" + "Style" + "</div>" +
                    "<div class='value'>" + styleName + "</div>"
                const libName = layer.b != undefined ? (layer.b + " (external)") :
                    (siLayer ? siLayer.b + " (external)" : "Document")
                info += "<div style='font-size:12px; color:var(--color-secondary)'>" + libName + "</div></div>"
            }


            if (comment != undefined) info +=
                "<hr>" +
                "<div class='block'>" +
                "<div class='label'>" + "Comment" + "</div>" +
                "<div style='value'>" + comment + "</div>" + 2
            "</div>"

            info += "<hr>" +
                "<div class='block twoColumn'>" +
                "<div>" +
                "<span class='label'>" + "X: </span>" + Math.round(frameX) + "px" +
                "</div>" +
                "<div>" +
                "<span class='label'>" + "Y: </span>" + Math.round(frameY) + "px" +
                "</div>" +
                "</div>"

            info += "<div class='block twoColumn'>" +
                "<div>" +
                "<span class='label'>" + "Width: </span>" + Math.round(frameWidth) + "px" +
                "</div>" +
                "<div>" +
                "<span class='label'>" + "Height: </span>" + Math.round(frameHeight) + "px" +
                "</div>" +
                "</div>"


            if (layer.pr != undefined) {
                let tokens = null
                if (styleInfo)
                    tokens = styleInfo.style.tokens
                else if (symInfo) {
                    const foundLayer = symInfo.symbol.layers[layer.n]
                    if (foundLayer) tokens = foundLayer.tokens
                }
                const decRes = sv._decorateCSS(layer.pr, tokens, layer.b ? layer : siLayer)
                info += decRes.css
                if ("Text" == layer.tp) {
                    if (layer.tx != undefined && layer.tx != "") {
                        info += `
                            <hr>
                            <div class='block'>
                            <div class='label'>Content&nbsp;<button onclick = "copyToBuffer('sv_content')">Copy</button>`
                        let afterContent = ""
                        let cssClass = ""
                        if (decRes.styles["font-family"].startsWith("Font Awesome 5")) {
                            cssClass += "icon "
                            if (decRes.styles["font-weight"] != "400") cssClass += "solid "
                            const codeText = layer.tx.codePointAt(0).toString(16)
                            afterContent = "Unicode: " + codeText
                            info += `<button onclick = "showFAIconInfo('` + codeText + `')">Info</button>`
                        } else {
                            cssClass += "code value"
                        }
                        info += `</div ><div id='sv_content' class="` + cssClass + `">` + layer.tx + "</div>"
                        if (afterContent != "") {
                            info += "<div  class='code value'>" + afterContent + "</div>"
                        }
                        info += "</div>"
                    }
                }
            }

            if ("Image" == layer.tp) {
                const url = layer.iu
                info += `
                        <hr>
                        <div class='block'>
                        <div class='label'>Content&nbsp;<a class="svlink" href="`+ url + `">Download</a>`
                let cssClass = "code value"
                const width = "100%" //viewer.defSidebarWidth - 40
                info += `</div ><div id='sv_content' class="` + cssClass + `"><img ` + `width="` + width + `" src="` + url + `"/></div>`
            }

            $('#symbol_viewer #empty').addClass("hidden")
            $("#symbol_viewer_content").html(info)
            //alert(info)
            return false
        })

        a.prependTo(currentPanel.linksDiv)

        var style = "left: " + l.finalX + "px; top:" + l.finalY + "px; "
        style += "width: " + l.w + "px; height:" + l.h + "px; "
        var symbolDiv = $("<div>", {
            class: "symbolDiv",
        }).attr('style', style)
        symbolDiv.mouseenter(function () {
            viewer.symbolViewer.mouseEnterLayerDiv($(this))
        })

        symbolDiv.appendTo(a)
    }

    setSelected(layer, a) {
        // reset previous selection        
        if (this.selected) {
            this.selected.marginDivs.forEach(d => d.remove())
            this.selected.borderDivs.forEach(d => d.remove())
        }
        if (!layer || (this.selected && layer.infoIndex == this.selected.layer.infoIndex)) {
            this.selected = null
            return
        }
        // select new
        this.selected = {
            layer: layer,
            a: $(this),
            marginDivs: [],
            borderDivs: [],
        }
        // draw left vertical border
        this.selected.borderDivs.push(
            this._drawMarginLine(layer.parentPanel, layer.finalX, 0, 1, layer.parentPanel.height, "svBorderLineDiv")
        )
        // draw right vertical border
        this.selected.borderDivs.push(
            this._drawMarginLine(layer.parentPanel, layer.finalX + layer.w, 0, 1, layer.parentPanel.height, "svBorderLineDiv")
        )
        // draw top horizonal border
        this.selected.borderDivs.push(
            this._drawMarginLine(layer.parentPanel, 0, layer.finalY, layer.parentPanel.width, 1, "svBorderLineDiv")
        )
        // draw bottom horizonal border
        this.selected.borderDivs.push(
            this._drawMarginLine(layer.parentPanel, 0, layer.finalY + layer.h, layer.parentPanel.width, 1, "svBorderLineDiv")
        )
    }


    mouseEnterLayerDiv(div) {
        // get a layer under mouse 
        const a = div.parent()
        const sv = viewer.symbolViewer
        const pageIndex = a.attr("pi")
        const layerIndex = a.attr("li")
        const layer = sv.createdPages[pageIndex].layerArray[layerIndex]
        if (!layer) return
        // get a currently selected layer
        if (!sv.selected) return
        const slayer = sv.selected.layer
        //
        if (!slayer || !layer) return
        // check if layers are in the same panel
        if (slayer.parentPanel != layer.parentPanel) return
        // remove previous margins
        this.selected.marginDivs.forEach(d => d.remove())
        this.selected.marginDivs = []
        // show margins
        this._drawTopVMargin(slayer.parentPanel, layer, slayer)
        this._drawBottomVMargin(slayer.parentPanel, layer, slayer)
        this._drawLeftHMargin(slayer.parentPanel, layer, slayer)
        this._drawRightHMargin(slayer.parentPanel, layer, slayer)
    }

    _drawLeftHMargin(currentPanel, layer, slayer) {
        let hmargin = 0
        let x = null
        if (layer.finalX == slayer.finalX) {
        } else if ((slayer.finalX + slayer.w) < layer.finalX) {
            // if layer bottom over slayer top => don't show top margin
        } else if ((layer.finalX + layer.w) < slayer.finalX) {
            // layer bottom over slayer.top
            x = layer.finalX + layer.w
            hmargin = slayer.finalX - x
        } else if (layer.finalX < slayer.finalX) {
            // layer top over slayer.top
            x = layer.finalX
            hmargin = slayer.finalX - x
        } else {
            // layer top over slayer.top
            x = slayer.finalX
            hmargin = layer.finalX - x
        }

        if (hmargin > 0) {
            let y = this._findLayersCenterY(layer, slayer)
            this.selected.marginDivs.push(this._drawMarginLine(currentPanel, x, y, hmargin, 1, "svMarginLineDiv"))
            this.selected.marginDivs.push(this._drawMarginValue(currentPanel, x + hmargin / 2, y, hmargin, "svMarginLineDiv"))
        }
    }


    _drawRightHMargin(currentPanel, layer, slayer) {
        let hmargin = 0
        let x = null

        const layerRight = layer.finalX + layer.w
        const slayerRight = slayer.finalX + slayer.w

        if (layerRight == slayerRight) {
        } else if (layerRight < slayer.finalX) {
            // if layer bottom over slayer bottom => don't show bottom margin                
        } else if (slayerRight < layer.finalX) {
            // slayer bottom over layer.top
            x = slayerRight
            hmargin = layer.finalX - x
        } else if (slayerRight < layerRight) {
            // slayer bottom over layer.bottom
            x = slayerRight
            hmargin = layerRight - x
        } else {
            // slayer bottom over layer.bottom
            x = layerRight
            hmargin = slayerRight - x
        }

        if (hmargin > 0) {
            let y = this._findLayersCenterY(layer, slayer)
            this.selected.marginDivs.push(this._drawMarginLine(currentPanel, x, y, hmargin, 1, "svMarginLineDiv"))
            this.selected.marginDivs.push(this._drawMarginValue(currentPanel, x + hmargin / 2, y, hmargin, "svMarginLineDiv"))
        }
    }


    _drawTopVMargin(currentPanel, layer, slayer) {
        let vmargin = 0
        let y = null
        if (layer.finalY == slayer.finalY) {
        } else if ((slayer.finalY + slayer.h) < layer.finalY) {
            // if layer bottom over slayer top => don't show top margin
        } else if ((layer.finalY + layer.h) < slayer.finalY) {
            // layer bottom over slayer.top
            y = layer.finalY + layer.h
            vmargin = slayer.finalY - y
        } else if (layer.finalY < slayer.finalY) {
            // layer top over slayer.top
            y = layer.finalY
            vmargin = slayer.finalY - y
        } else {
            // layer top over slayer.top
            y = slayer.finalY
            vmargin = layer.finalY - y
        }

        if (vmargin > 0) {
            let x = this._findLayersCenterX(layer, slayer)
            this.selected.marginDivs.push(this._drawMarginLine(currentPanel, x, y, 1, vmargin, "svMarginLineDiv"))
            this.selected.marginDivs.push(this._drawMarginValue(currentPanel, x, y + vmargin / 2, vmargin, "svMarginLineDiv"))
        }
    }

    _drawBottomVMargin(currentPanel, layer, slayer) {
        let vmargin = 0
        let y = null

        const layerBottom = layer.finalY + layer.h
        const slayerBottom = slayer.finalY + slayer.h

        if (layerBottom == slayerBottom) {
        } else if (layerBottom < slayer.finalY) {
            // if layer bottom over slayer bottom => don't show bottom margin        
        } else if (slayerBottom < layer.finalY) {
            // slayer bottom over layer.top
            y = slayerBottom
            vmargin = layer.finalY - y
        } else if (slayerBottom < layerBottom) {
            // slayer bottom over layer.bottom
            y = slayerBottom
            vmargin = layerBottom - y
        } else {
            // slayer bottom over layer.bottom
            y = layerBottom
            vmargin = slayerBottom - y
        }

        if (vmargin > 0) {
            let x = this._findLayersCenterX(layer, slayer)
            this.selected.marginDivs.push(this._drawMarginLine(currentPanel, x, y, 1, vmargin, "svMarginLineDiv"))
            this.selected.marginDivs.push(this._drawMarginValue(currentPanel, x, y + vmargin / 2, vmargin, "svMarginLineDiv"))
        }
    }


    _findLayersCenterX(l, sl) {
        let c = l.finalX + l.w / 2
        let sc = sl.finalX + sl.w / 2
        return sl.finalX > l.finalX && ((sl.finalX + sl.w) < (l.finalX + l.w)) ? sc : c
    }

    _findLayersCenterY(l, sl) {
        let c = l.finalY + l.h / 2
        let sc = sl.finalY + sl.h / 2
        return sl.finalY > l.finalY && ((sl.finalY + sl.h) < (l.finalY + l.h)) ? sc : c
    }

    _drawMarginLine(currentPanel, x, y, width, height, className) {
        var style = "left: " + x + "px; top:" + y + "px; "
        style += "width: " + width + "px; height:" + height + "px; "
        var div = $("<div>", { class: className }).attr('style', style)
        div.appendTo(currentPanel.linksDiv)
        return div
    }
    _drawMarginValue(currentPanel, x, y, value) {
        const valueHeight = 20
        const valueWidth = 30
        var style = "left: " + (x - valueWidth / 2) + "px; top:" + (y - valueHeight / 2) + "px; "
        //style += "width: " + valueWidth + "px; height:" + valueHeight + "px; "
        var div = $("<div>", {
            class: "svMarginValueDiv",
        }).attr('style', style)
        //
        div.html(" " + Number.parseFloat(value).toFixed(0) + " ")
        //
        div.appendTo(currentPanel.linksDiv)
        return div
    }

    _decorateCSS(css, tokens, siLayer) {
        let result = ""
        let styles = {}

        result += "<hr>" +
            "<div class='block'>" +
            "<div class='label'>Styles</div > " +
            "<div class='value code'>"

        css.split("\n").forEach(line => {
            if ("" == line) return
            const props = line.split(": ", 2)
            if (!props.length) return
            const styleName = props[0]
            const styleValue = props[1].slice(0, -1)
            result += "" + styleName + ": "
            result += "<span class='tokenName'>"
            //
            styles[styleName] = styleValue
            //
            const tokenStr = tokens != null ? this._decorateStyleToken(styleName, tokens, siLayer, styleValue) : ""
            result += tokenStr != "" ? tokenStr : (styleValue + ";")
            //
            result += "</span>"
            result += "<br/>"
        }, this);

        result += "</div></div>"
        return { "css": result, "styles": styles }
    }

    _decorateStyleToken(style, tokens, siLayer, styleValue) {
        // search tokan name by style name 
        const foundTokens = tokens.filter(t => t[0] == style)
        if (!foundTokens.length) return ""
        const tokenName = foundTokens[foundTokens.length - 1][1]
        //
        const libName = undefined != siLayer.b ? siLayer.b : story.docName
        const finalTokenInfo = this._findTokenValueByName(tokenName, libName, styleValue)
        //
        if (finalTokenInfo)
            return finalTokenInfo[0] + ";</span><span class='tokenValue'>//" + finalTokenInfo[1]
        else
            return ""
    }


    _showTextPropery(propName, propValue, postfix = "") {
        let text = propName + ": " + propValue + postfix + ";"
        return text + "<br/>"
    }

    // result: undefined or [tokenName,tokenValue]
    _findTokenValueByName(tokenName, libName, styleValue = null) {
        const lib = TOKENS_DICT[libName]
        if (undefined == lib) return undefined
        let value = lib[tokenName]
        if (value != undefined || null == styleValue) return [tokenName, lib[tokenName]]

        ///// try to find a token with a similar name
        // cut magic postfix to get a string for search
        const pos = tokenName.indexOf("--token")
        if (pos < 0) return undefined
        styleValue = styleValue.toLowerCase()
        const newName = tokenName.slice(0, pos)
        // filter lib tokens by name and value
        const similarTokens = Object.keys(lib).filter(function (n) {
            return n.startsWith(newName) && lib[n].toLowerCase() == styleValue
        }, this)
        if (!similarTokens.length) return undefined
        //
        return [
            similarTokens[0],
            lib[similarTokens[0]]
        ]
    }

    _findSymbolAndLibBySymbolName(symName) {
        for (const libName of Object.keys(SYMBOLS_DICT)) {
            const lib = SYMBOLS_DICT[libName]
            if (!(symName in lib)) continue
            return {
                lib: lib,
                libName: libName,
                symbol: lib[symName]
            }
        }
        return undefined
    }

    _findStyleAndLibByStyleName(styleName) {
        for (const libName of Object.keys(SYMBOLS_DICT)) {
            const lib = SYMBOLS_DICT[libName]
            if (!("styles" in lib) || !(styleName in lib.styles)) continue
            return {
                lib: lib,
                libName: libName,
                style: lib.styles[styleName]
            }
        }
        return undefined
    }
}
