"use strict";
// https://www.terraform.io/docs/providers/aws/r/appstream_stack.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AppstreamStack = void 0;
var cdktf = require("cdktf");
function appstreamStackAccessEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_type: cdktf.stringToTerraform(struct.endpointType),
        vpce_id: cdktf.stringToTerraform(struct.vpceId)
    };
}
function appstreamStackApplicationSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        settings_group: cdktf.stringToTerraform(struct.settingsGroup)
    };
}
function appstreamStackStorageConnectorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_type: cdktf.stringToTerraform(struct.connectorType),
        domains: cdktf.listMapper(cdktf.stringToTerraform)(struct.domains),
        resource_identifier: cdktf.stringToTerraform(struct.resourceIdentifier)
    };
}
function appstreamStackUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        permission: cdktf.stringToTerraform(struct.permission)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack}
*/
var AppstreamStack = /** @class */ (function (_super) {
    __extends(AppstreamStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamStackConfig
    */
    function AppstreamStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appstream_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._displayName = config.displayName;
        _this._embedHostDomains = config.embedHostDomains;
        _this._feedbackUrl = config.feedbackUrl;
        _this._name = config.name;
        _this._redirectUrl = config.redirectUrl;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accessEndpoints = config.accessEndpoints;
        _this._applicationSettings = config.applicationSettings;
        _this._storageConnectors = config.storageConnectors;
        _this._userSettings = config.userSettings;
        return _this;
    }
    Object.defineProperty(AppstreamStack.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "embedHostDomains", {
        get: function () {
            return this.getListAttribute('embed_host_domains');
        },
        set: function (value) {
            this._embedHostDomains = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetEmbedHostDomains = function () {
        this._embedHostDomains = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "embedHostDomainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._embedHostDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "feedbackUrl", {
        get: function () {
            return this.getStringAttribute('feedback_url');
        },
        set: function (value) {
            this._feedbackUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetFeedbackUrl = function () {
        this._feedbackUrl = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "feedbackUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._feedbackUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "redirectUrl", {
        get: function () {
            return this.getStringAttribute('redirect_url');
        },
        set: function (value) {
            this._redirectUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetRedirectUrl = function () {
        this._redirectUrl = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "redirectUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redirectUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "accessEndpoints", {
        get: function () {
            return this.interpolationForAttribute('access_endpoints');
        },
        set: function (value) {
            this._accessEndpoints = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetAccessEndpoints = function () {
        this._accessEndpoints = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "accessEndpointsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessEndpoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "applicationSettings", {
        get: function () {
            return this.interpolationForAttribute('application_settings');
        },
        set: function (value) {
            this._applicationSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetApplicationSettings = function () {
        this._applicationSettings = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "applicationSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "storageConnectors", {
        get: function () {
            return this.interpolationForAttribute('storage_connectors');
        },
        set: function (value) {
            this._storageConnectors = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetStorageConnectors = function () {
        this._storageConnectors = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "storageConnectorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageConnectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppstreamStack.prototype, "userSettings", {
        get: function () {
            return this.interpolationForAttribute('user_settings');
        },
        set: function (value) {
            this._userSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    AppstreamStack.prototype.resetUserSettings = function () {
        this._userSettings = undefined;
    };
    Object.defineProperty(AppstreamStack.prototype, "userSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppstreamStack.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            display_name: cdktf.stringToTerraform(this._displayName),
            embed_host_domains: cdktf.listMapper(cdktf.stringToTerraform)(this._embedHostDomains),
            feedback_url: cdktf.stringToTerraform(this._feedbackUrl),
            name: cdktf.stringToTerraform(this._name),
            redirect_url: cdktf.stringToTerraform(this._redirectUrl),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            access_endpoints: cdktf.listMapper(appstreamStackAccessEndpointsToTerraform)(this._accessEndpoints),
            application_settings: cdktf.listMapper(appstreamStackApplicationSettingsToTerraform)(this._applicationSettings),
            storage_connectors: cdktf.listMapper(appstreamStackStorageConnectorsToTerraform)(this._storageConnectors),
            user_settings: cdktf.listMapper(appstreamStackUserSettingsToTerraform)(this._userSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppstreamStack.tfResourceType = "aws_appstream_stack";
    return AppstreamStack;
}(cdktf.TerraformResource));
exports.AppstreamStack = AppstreamStack;
