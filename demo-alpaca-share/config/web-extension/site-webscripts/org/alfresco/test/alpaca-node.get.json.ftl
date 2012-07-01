{
                    "_system" : {
                        "cm:type" : "p:lo",
                        "cm:noderef" : "${(args.nodeRef!"")?js_string}"
                    },
                    "cm:name" : "SMRE_DI_00340",
                    "cm:title" : "Explicit Instruction: Idioms",
                    "cm:description" : "",
                    "p:pearsonId" : "lob87322",
                    "p:lexile" : "0",
                    "p:courseLevel" : 1.905,
                    "p:role" : "Instruction",
                    "p:template" : "Treasure Hunt",
                    "p:order" : 1,
                    "p:language" : "English",
                    "cm:contains": [
                        {
                            "cm:name" : "SMRE_DI_00340_S1",
                            "cm:title" : "",
                            "cm:description" :"",
                            "p:template" : "Treasure Hunt",
                            "p:pearsonId" : "sco104266",
                            "p:order" : 1,
                            "p:launchParameters" : "",
                            "p:launchData" : "movie=/lo/SMRE_DI_00340/art/SMRE_DI_00340.swf,fullscreen=false",
                            "p:uri" : "",
                            "cm:contains": [
                                {
                                    "cm:name" : "SMRE_IP_00190_Q06",
                                    "cm:title" : "",
                                    "cm:description" : "",
                                    "p:template" : "Treasure Hunt",
                                    "cm:content" : {
                                        "@xmlns": "http://www.imsglobal.org/xsd/imsqti_v2p0",
                                        "@xmlns:ns1": "http://www.w3.org/2001/XMLSchema-instance",
                                        "@ns1:schemaLocation": "http://www.imsglobal.org/xsd/imsqti_v2p0 imsqti_v2p0.xsd",
                                        "@identifier": "SMRE_IP_00190_Q06",
                                        "@title": "SMRE_IP_00190_Q06",
                                        "@adaptive": "false",
                                        "@timeDependent": "false",
                                        "@label": "choice",
                                        "responseDeclaration":   {
                                            "@identifier": "RESPONSE",
                                            "@cardinality": "single",
                                            "@baseType": "identifier",
                                            "correctResponse": {"value": ["dist72124"]}
                                        },
                                        "outcomeDeclaration":   {
                                            "@identifier": "SCORE",
                                            "@cardinality": "single",
                                            "@baseType": "float",
                                            "defaultValue": {"value": "0"}
                                        },
                                        "stylesheet":   [
                                            {
                                                "@href": "2",
                                                "@title": "layout"
                                            },
                                            {
                                                "@href": "objective=179.1,significance=null,levelOfDifficulty=0",
                                                "@title": "motionData"
                                            }
                                        ],
                                        "itemBody":   {
                                            "div":     [
                                                {
                                                    "@id": "question",
                                                    "p": "an image of the inside of an astronaut sleep area",
                                                    "object":         [
                                                        {
                                                            "@data": "/lib/templates/_art/GAL1419.swf",
                                                            "param":           [
                                                                {
                                                                    "@valuetype": "VARIABLE",
                                                                    "@name": "AssetSetId",
                                                                    "@value": "1"
                                                                },
                                                                {
                                                                    "@valuetype": "VARIABLE",
                                                                    "@name": "image",
                                                                    "@value": "true"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "@id": "media",
                                                    "object": [
                                                        {"@data": "audio/SMRE_IP_00190_052.mp3"}
                                                    ]
                                                }
                                            ],
                                            "choiceInteraction":     {
                                                "@responseIdentifier": "RESPONSE",
                                                "@shuffle": "false",
                                                "@maxChoices": "1",
                                                "prompt": {"object": {"@data": "audio/SMRE_IP_00190_002.mp3"}},
                                                "simpleChoice":       [
                                                    {
                                                        "@identifier": "dist28116",
                                                        "p": "An astronaut must exercise every day to stay healthy and strong.",
                                                        "object": {"@data": "audio/SMRE_IP_00190_006.mp3"}
                                                    },
                                                    {
                                                        "@identifier": "dist28118",
                                                        "p": "It is not easy to eat on a space station.",
                                                        "object": {"@data": "audio/SMRE_IP_00190_013.mp3"}
                                                    },
                                                    {
                                                        "@identifier": "dist72124",
                                                        "p": "There are many places to sleep on a space station.",
                                                        "object": {"@data": "audio/SMRE_IP_00190_011.mp3"}
                                                    }
                                                ]
                                            }
                                        },
                                        "responseProcessing": {"@template": ""},
                                        "modalFeedback":   [
                                            {
                                                "@outcomeIdentifier": "FEEDBACK",
                                                "@identifier": "CA",
                                                "@showHide": "hide"
                                            },
                                            {
                                                "@outcomeIdentifier": "FEEDBACK",
                                                "@identifier": "WA1",
                                                "@showHide": "hide",
                                                "object": [
                                                    {"@data": "audio/SMRE_IP_00190_003.mp3"}
                                                ]
                                            },
                                            {
                                                "@outcomeIdentifier": "FEEDBACK",
                                                "@identifier": "SA",
                                                "@showHide": "hide",
                                                "object": [
                                                    {"@data": "audio/SMRE_IP_00190_045.mp3"}
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }