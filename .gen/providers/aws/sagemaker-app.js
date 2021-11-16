"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html
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
exports.SagemakerApp = void 0;
var cdktf = require("cdktf");
function sagemakerAppResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app}
*/
var SagemakerApp = /** @class */ (function (_super) {
    __extends(SagemakerApp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppConfig
    */
    function SagemakerApp(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appName = config.appName;
        _this._appType = config.appType;
        _this._domainId = config.domainId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userProfileName = config.userProfileName;
        _this._resourceSpec = config.resourceSpec;
        return _this;
    }
    Object.defineProperty(SagemakerApp.prototype, "appName", {
        get: function () {
            return this.getStringAttribute('app_name');
        },
        set: function (value) {
            this._appName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "appNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "appType", {
        get: function () {
            return this.getStringAttribute('app_type');
        },
        set: function (value) {
            this._appType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "appTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "domainId", {
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        set: function (value) {
            this._domainId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "domainIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerApp.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerApp.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerApp.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerApp.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "userProfileName", {
        get: function () {
            return this.getStringAttribute('user_profile_name');
        },
        set: function (value) {
            this._userProfileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "userProfileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userProfileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerApp.prototype, "resourceSpec", {
        get: function () {
            return this.interpolationForAttribute('resource_spec');
        },
        set: function (value) {
            this._resourceSpec = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerApp.prototype.resetResourceSpec = function () {
        this._resourceSpec = undefined;
    };
    Object.defineProperty(SagemakerApp.prototype, "resourceSpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceSpec;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerApp.prototype.synthesizeAttributes = function () {
        return {
            app_name: cdktf.stringToTerraform(this._appName),
            app_type: cdktf.stringToTerraform(this._appType),
            domain_id: cdktf.stringToTerraform(this._domainId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_profile_name: cdktf.stringToTerraform(this._userProfileName),
            resource_spec: cdktf.listMapper(sagemakerAppResourceSpecToTerraform)(this._resourceSpec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerApp.tfResourceType = "aws_sagemaker_app";
    return SagemakerApp;
}(cdktf.TerraformResource));
exports.SagemakerApp = SagemakerApp;
