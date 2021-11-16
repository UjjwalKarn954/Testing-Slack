"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html
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
exports.SsmResourceDataSync = void 0;
var cdktf = require("cdktf");
function ssmResourceDataSyncS3DestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        region: cdktf.stringToTerraform(struct.region),
        sync_format: cdktf.stringToTerraform(struct.syncFormat)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync}
*/
var SsmResourceDataSync = /** @class */ (function (_super) {
    __extends(SsmResourceDataSync, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    function SsmResourceDataSync(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_resource_data_sync',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._s3Destination = config.s3Destination;
        return _this;
    }
    Object.defineProperty(SsmResourceDataSync.prototype, "id", {
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
    Object.defineProperty(SsmResourceDataSync.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmResourceDataSync.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmResourceDataSync.prototype, "s3Destination", {
        get: function () {
            return this.interpolationForAttribute('s3_destination');
        },
        set: function (value) {
            this._s3Destination = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmResourceDataSync.prototype, "s3DestinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Destination;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmResourceDataSync.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            s3_destination: cdktf.listMapper(ssmResourceDataSyncS3DestinationToTerraform)(this._s3Destination)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmResourceDataSync.tfResourceType = "aws_ssm_resource_data_sync";
    return SsmResourceDataSync;
}(cdktf.TerraformResource));
exports.SsmResourceDataSync = SsmResourceDataSync;
