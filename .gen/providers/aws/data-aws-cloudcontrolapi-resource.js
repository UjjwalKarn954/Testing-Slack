"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html
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
exports.DataAwsCloudcontrolapiResource = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource}
*/
var DataAwsCloudcontrolapiResource = /** @class */ (function (_super) {
    __extends(DataAwsCloudcontrolapiResource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudcontrolapiResourceConfig
    */
    function DataAwsCloudcontrolapiResource(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudcontrolapi_resource',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._identifier = config.identifier;
        _this._roleArn = config.roleArn;
        _this._typeName = config.typeName;
        _this._typeVersionId = config.typeVersionId;
        return _this;
    }
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "properties", {
        // properties - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('properties');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudcontrolapiResource.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "typeName", {
        get: function () {
            return this.getStringAttribute('type_name');
        },
        set: function (value) {
            this._typeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "typeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "typeVersionId", {
        get: function () {
            return this.getStringAttribute('type_version_id');
        },
        set: function (value) {
            this._typeVersionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudcontrolapiResource.prototype.resetTypeVersionId = function () {
        this._typeVersionId = undefined;
    };
    Object.defineProperty(DataAwsCloudcontrolapiResource.prototype, "typeVersionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeVersionId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudcontrolapiResource.prototype.synthesizeAttributes = function () {
        return {
            identifier: cdktf.stringToTerraform(this._identifier),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            type_name: cdktf.stringToTerraform(this._typeName),
            type_version_id: cdktf.stringToTerraform(this._typeVersionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudcontrolapiResource.tfResourceType = "aws_cloudcontrolapi_resource";
    return DataAwsCloudcontrolapiResource;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudcontrolapiResource = DataAwsCloudcontrolapiResource;
