(function($) {

	Alpaca.Forms.Schema.Product = {
		"title" : "Product Form",
		"description" : "Schema for Demo Product JSON object",
		"type" : "object",
		"properties" : {
			"product" : {
				"title" : "Name",
				"type" : "string",
				"required" : true
			},
			"description" : {
				"title" : "Description",
				"type" : "string",
				"required" : false
			},
			"release-date" : {
				"title" : "Release Date",
				"type" : "string",
				"required" : false
			},
			"archived" : {
				"title" : "Archived?",
				"type" : "boolean"
			},
			"version" : {
				"title" : "Version",
				"type" : "string",
				"required" : false
			},
			"subject" : {
				"title" : "Subject",
				"type" : "string",
				"required" : true,
				"enum" : [
				    "Arithmetic",
				    "English",
				    "French",
				    "Geography",
				    "German",
				    "Reading",
				    "Spanish",
				    "Writing"
				],
				"default" : "Reading"
			}
		}
	};
	
	Alpaca.Forms.Options.Product = {
		"label" : "Product Form",
		"helper" : "Enter the product data.",
		"type" : "alpaca.demo.product",
		"fields" : {
			"product" : {
				"type" : "text"
			},
			"description" : {
				"type" : "textarea"
			},
			"release-date" : {
				"type" : "date"
			},
			"archived" : {
				"type" : "checkbox"
			},
			"version" : {
				"type" : "text"
			},
			"subject" : {
				"type" : "select",
				"optionLabels" : [
					"Arithmetic",
					"English",
					"French",
					"Geography",
					"German",
					"Reading",
					"Spanish",
					"Writing"
				]
			}
		}
	};

})(jQuery);