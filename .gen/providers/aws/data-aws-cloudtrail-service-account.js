"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html
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
exports.DataAwsCloudtrailServiceAccount = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account}
*/
var DataAwsCloudtrailServiceAccount = /** @class */ (function (_super) {
    __extends(DataAwsCloudtrailServiceAccount, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudtrailServiceAccountConfig = {}
    */
    function DataAwsCloudtrailServiceAccount(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudtrail_service_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._region = config.region;
        return _this;
    }
    Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "arn", {
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
    Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudtrailServiceAccount.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudtrailServiceAccount.prototype.synthesizeAttributes = function () {
        return {
            region: cdktf.stringToTerraform(this._region)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudtrailServiceAccount.tfResourceType = "aws_cloudtrail_service_account";
    return DataAwsCloudtrailServiceAccount;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudtrailServiceAccount = DataAwsCloudtrailServiceAccount;
