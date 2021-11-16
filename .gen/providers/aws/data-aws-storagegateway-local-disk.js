"use strict";
// https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html
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
exports.DataAwsStoragegatewayLocalDisk = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk}
*/
var DataAwsStoragegatewayLocalDisk = /** @class */ (function (_super) {
    __extends(DataAwsStoragegatewayLocalDisk, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsStoragegatewayLocalDiskConfig
    */
    function DataAwsStoragegatewayLocalDisk(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_local_disk',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._diskNode = config.diskNode;
        _this._diskPath = config.diskPath;
        _this._gatewayArn = config.gatewayArn;
        return _this;
    }
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "diskId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // disk_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disk_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "diskNode", {
        get: function () {
            return this.getStringAttribute('disk_node');
        },
        set: function (value) {
            this._diskNode = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsStoragegatewayLocalDisk.prototype.resetDiskNode = function () {
        this._diskNode = undefined;
    };
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "diskNodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "diskPath", {
        get: function () {
            return this.getStringAttribute('disk_path');
        },
        set: function (value) {
            this._diskPath = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsStoragegatewayLocalDisk.prototype.resetDiskPath = function () {
        this._diskPath = undefined;
    };
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "diskPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsStoragegatewayLocalDisk.prototype, "id", {
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
    DataAwsStoragegatewayLocalDisk.prototype.synthesizeAttributes = function () {
        return {
            disk_node: cdktf.stringToTerraform(this._diskNode),
            disk_path: cdktf.stringToTerraform(this._diskPath),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsStoragegatewayLocalDisk.tfResourceType = "aws_storagegateway_local_disk";
    return DataAwsStoragegatewayLocalDisk;
}(cdktf.TerraformDataSource));
exports.DataAwsStoragegatewayLocalDisk = DataAwsStoragegatewayLocalDisk;
