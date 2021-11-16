"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html
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
exports.StoragegatewayWorkingStorage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage}
*/
var StoragegatewayWorkingStorage = /** @class */ (function (_super) {
    __extends(StoragegatewayWorkingStorage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayWorkingStorageConfig
    */
    function StoragegatewayWorkingStorage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_working_storage',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._diskId = config.diskId;
        _this._gatewayArn = config.gatewayArn;
        return _this;
    }
    Object.defineProperty(StoragegatewayWorkingStorage.prototype, "diskId", {
        get: function () {
            return this.getStringAttribute('disk_id');
        },
        set: function (value) {
            this._diskId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayWorkingStorage.prototype, "diskIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayWorkingStorage.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayWorkingStorage.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayWorkingStorage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StoragegatewayWorkingStorage.prototype.synthesizeAttributes = function () {
        return {
            disk_id: cdktf.stringToTerraform(this._diskId),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayWorkingStorage.tfResourceType = "aws_storagegateway_working_storage";
    return StoragegatewayWorkingStorage;
}(cdktf.TerraformResource));
exports.StoragegatewayWorkingStorage = StoragegatewayWorkingStorage;
