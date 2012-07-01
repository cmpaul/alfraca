(function($) {

    var Alpaca = $.alpaca;

    Alpaca.Fields.ProductField = Alpaca.Fields.ObjectField.extend(
        /**
         * @lends Alpaca.Fields.AssessmentItemField.prototype
         */
        {
            /**
             * @constructs
             * @augments Alpaca.Fields.ObjectField
             *
             * @class A combo field for rendering an Pearson assessment item.
             *
             * @param {Object} container Field container.
             * @param {Any} data Field data.
             * @param {Object} options Field options.
             * @param {Object} schema Field schema.
             * @param {Object|String} view Field view.
             * @param {Alpaca.Connector} connector Field connector.
             * @param {Function} errorCallback Error callback.
             */
            constructor: function(container, data, options, schema, view, connector, errorCallback) {
                this.base(container, data, options, schema, view, connector, errorCallback);
            }
        });

    Alpaca.registerFieldClass("alpaca.demo.product", Alpaca.Fields.ProductField);
})(jQuery);
