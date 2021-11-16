"use strict";
// https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html
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
exports.AmiLaunchPermission = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission}
*/
var AmiLaunchPermission = /** @class */ (function (_super) {
    __extends(AmiLaunchPermission, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html aws_ami_launch_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiLaunchPermissionConfig
    */
    function AmiLaunchPermission(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami_launch_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._imageId = config.imageId;
        return _this;
    }
    Object.defineProperty(AmiLaunchPermission.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiLaunchPermission.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiLaunchPermission.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiLaunchPermission.prototype, "imageId", {
        get: function () {
            return this.getStringAttribute('image_id');
        },
        set: function (value) {
            this._imageId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmiLaunchPermission.prototype, "imageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmiLaunchPermission.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            image_id: cdktf.stringToTerraform(this._imageId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmiLaunchPermission.tfResourceType = "aws_ami_launch_permission";
    return AmiLaunchPermission;
}(cdktf.TerraformResource));
exports.AmiLaunchPermission = AmiLaunchPermission;
