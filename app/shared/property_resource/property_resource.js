angular.module('shared')
        .service("propertyResourceService", ['inflector', '$resource', 'BASE_URL',
            function (inflector, $resource, BASE_URL) {
                // That object holds all custom actions, that is, add any no CRUD operation
                var customActions = {
                    property: {
                        getTypes: {
                            method: 'GET',
                            url: BASE_URL + 'api/properties/types',
                            isArray: true
                        },
                        getServicesByPropertyType: {
                            method: 'GET',
                            url: BASE_URL + 'api/properties/:propertyTypeName/services',
                            isArray: true
                        },
                        getLastPublications: {
                            method: 'GET',
                            url: BASE_URL + 'api/properties/last_publications',
                            isArray: true
                        },
                        find: {
                            method: 'GET',
                            url: BASE_URL + 'api/properties/find',
                            isArray: true
                        }
                    },
                    field: {
                        fieldTargets: {
                            method: 'GET',
                            url: BASE_URL + 'api/fields/field_targets',
                            isArray: true
                        }
                    }
                };

                function addCustomActions(propertyType) {
                    var actions = customActions[propertyType] || {};
                    actions["update"] = {method: 'PUT'}

                    return actions;
                }


                this.create = function (propertyType) {
                    var pluralPropertyType = inflector.pluralize(propertyType);

                    // Here I'm adding custom actions to the resource
                    var actions = addCustomActions(propertyType);

                    // If there is no custom property type resource, return a generic.
                    return $resource(BASE_URL + 'api/' + pluralPropertyType + '/:id',
                            null,
                            actions);
                }
            }]);

        