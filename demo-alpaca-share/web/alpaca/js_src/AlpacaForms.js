(function($) {
    if (typeof Alpaca === "undefined") {
        Alpaca = {};
    }

    if (typeof Alpaca.Forms === "undefined") {
        Alpaca.Forms = {};
    }

    if (typeof Alpaca.Forms.Schema === "undefined") {
        Alpaca.Forms.Schema = {};
    }

    if (typeof Alpaca.Forms.Options === "undefined") {
        Alpaca.Forms.Options = {};
    }

    if (typeof Alpaca.Forms.Utils === "undefined") {
        Alpaca.Forms.Utils = {};
    }

    Alpaca.Forms.Utils.UI = {
        /**
         * Used to launch a modal blocking dialog with message.
         *
         * @param message
         */
        block: function(message) {
            $.blockUI({
                css: {
                    'background': 'url("/share/alpaca/css/images/blockui/shine-effect.png") repeat-x scroll 0 0 rgba(33, 40, 44, 0.7)',
                    'border': '1px solid #25333C',
                    'border-radius': '5px 5px 5px 5px',
                    'box-shadow': '0 0 5px rgba(0, 0, 0, 0.5)',
                    'padding': '8px'
                },
                message: '<div class="block-content"><h1><img src="/share/alpaca/css/images/blockui/busy.gif" />   ' + message + '</h1></div>'
            });
        },

        /**
         * Closes the modal blocking dialog
         */
        unblock: function(callback) {
            if (callback) {
                $.unblockUI({
                    "onUnblock" : callback
                });
            } else {
                $.unblockUI();
            }
        },
        
        navigateForward: function() {
    		if (document.referrer) {
    			/* Did we come from the document library? If so, then direct the user back there */
    			if (document.referrer.match(/documentlibrary([?]|$)/)
    					|| document.referrer.match(/repository([?]|$)/)) {
    				// go back to the referrer page
    				history.go(-1);
    			} else {
    				document.location.href = document.referrer;
    			}
    		} else if (history.length > 1) {
    			/**
    			 * The document.referrer wasn't available, either because there was no previous page (because the user
    			 * navigated directly to the page) or because the referrer header has been blocked.
    			 * So instead we'll use the browser history, unfortunately with increased chance of displaying stale data
    			 * since the page most likely won't be refreshed.
    			 */
    			history.go(-1);
    		} else {
    			// go forward to the appropriate details page for the node
    			// TODO: Wrong URL
    			window.location.href = Alfresco.util
    					.siteURL("document-details?nodeRef=" + nodeRef);
    		}
    	}
    };
    
    Alpaca.Forms.Product = {
    	initialize: function(nodeRef) {
    		Alpaca.Forms.Utils.UI.block("Loading...");

    		$('div.sticky-wrapper').removeClass('sticky-wrapper').addClass('alpaca-wrapper');

    		// Call the repo for metadata
    		$.ajax({
    			url : "/share/proxy/alfresco/api/metadata?nodeRef=" + nodeRef,
    			success : function(node) {
    				if (node == null || node == undefined) {
    					alert("Unable to retrieve node for nodeRef " + nodeRef);
    					return;
    				}

    				// property namespaces
    				var mcns = "{http://www.alfresco.org/model/content/1.0}";
    				var msns = "{http://www.alfresco.org/model/system/1.0}";
    				// extract metadata
    				var storeType = node.properties[msns + "store-protocol"];
    				var storeId = node.properties[msns + "store-identifier"];
    				var nodeId = node.properties[msns + "node-uuid"];
    				var name = node.properties[mcns + "name"];

    				// Retrieve the content
    				$.ajax({
    					url : "/share/proxy/alfresco/api/node/content/"
    							+ storeType + "/" + storeId + "/"
    							+ nodeId,
    					success : function(content) {
    						$("#alpaca-form-field").alpaca({
    							"data" : content,
    							"schema" : Alpaca.Forms.Schema.Product,
    							"options" : Alpaca.Forms.Options.Product,
    							"postRender" : function(form) {
    								Alpaca.Forms.Utils.UI.unblock(function() {
    									$('<button id="submit-button">Submit</button>').button({
    										"icons" : {
    											primary : "ui-icon-disk"
    										}
    									}).click(function() {
    										var formVal = form.getValue();
    										if (form.isValid(true)) {
    											Alpaca.Forms.Utils.UI.block("Saving...");
    											$.ajax({
    												"url" : Alfresco.constants.PROXY_URI
    														+ "/product/"
    														+ storeType
    														+ "/"
    														+ storeId
    														+ "/"
    														+ nodeId,
    												"type" : 'POST',
    												"data" : JSON.stringify(formVal),
    												"contentType" : "application/json; charset=utf-8",
    												"dataType" : "json",
    												"success" : function(data) {
    													Alpaca.Forms.Utils.UI.unblock(function() {
    														Alpaca.Forms.Utils.UI.navigateForward();
    													});
    												}
    											});
    										}
    									}).appendTo('#alpaca-form-field-button-bar');
    									$('<button id="cancel-button">Cancel</button>').button()
    										.click(function() {
    											Alpaca.Forms.Utils.UI.navigateForward();
    										})
    										.appendTo('#alpaca-form-field-button-bar');
    								});
    							}
    						});
    					},
    					failure : function(data) {
    						alert(data);
    					}
    				});
    			},
    			failure : function(data) {
    				alert(data);
    			}
    		});
    	}
    } 

})(jQuery);