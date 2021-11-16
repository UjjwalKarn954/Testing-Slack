"use strict";
// https://www.terraform.io/docs/providers/aws/d/workspaces_image.html
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
exports.DataAwsWorkspacesImage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image}
*/
var DataAwsWorkspacesImage = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesImageConfig
    */
    function DataAwsWorkspacesImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_workspaces_image',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._imageId = config.imageId;
        return _this;
    }
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "description", {
        // ==========
        // ATTRIBUTES
        // ==========
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "imageId", {
        get: function () {
            return this.getStringAttribute('image_id');
        },
        set: function (value) {
            this._imageId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "imageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "operatingSystemType", {
        // operating_system_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operating_system_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "requiredTenancy", {
        // required_tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('required_tenancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesImage.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsWorkspacesImage.prototype.synthesizeAttributes = function () {
        return {
            image_id: cdktf.stringToTerraform(this._imageId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWorkspacesImage.tfResourceType = "aws_workspaces_image";
    return DataAwsWorkspacesImage;
}(cdktf.TerraformDataSource));
exports.DataAwsWorkspacesImage = DataAwsWorkspacesImage;
