"use strict";
// https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html
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
exports.DataAwsGlobalacceleratorAccelerator = exports.DataAwsGlobalacceleratorAcceleratorIpSets = exports.DataAwsGlobalacceleratorAcceleratorAttributes = void 0;
var cdktf = require("cdktf");
var DataAwsGlobalacceleratorAcceleratorAttributes = /** @class */ (function (_super) {
    __extends(DataAwsGlobalacceleratorAcceleratorAttributes, _super);
    function DataAwsGlobalacceleratorAcceleratorAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlobalacceleratorAcceleratorAttributes.prototype, "flowLogsEnabled", {
        // flow_logs_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flow_logs_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAcceleratorAttributes.prototype, "flowLogsS3Bucket", {
        // flow_logs_s3_bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('flow_logs_s3_bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAcceleratorAttributes.prototype, "flowLogsS3Prefix", {
        // flow_logs_s3_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('flow_logs_s3_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlobalacceleratorAcceleratorAttributes;
}(cdktf.ComplexComputedList));
exports.DataAwsGlobalacceleratorAcceleratorAttributes = DataAwsGlobalacceleratorAcceleratorAttributes;
var DataAwsGlobalacceleratorAcceleratorIpSets = /** @class */ (function (_super) {
    __extends(DataAwsGlobalacceleratorAcceleratorIpSets, _super);
    function DataAwsGlobalacceleratorAcceleratorIpSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlobalacceleratorAcceleratorIpSets.prototype, "ipAddresses", {
        // ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAcceleratorIpSets.prototype, "ipFamily", {
        // ip_family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_family');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlobalacceleratorAcceleratorIpSets;
}(cdktf.ComplexComputedList));
exports.DataAwsGlobalacceleratorAcceleratorIpSets = DataAwsGlobalacceleratorAcceleratorIpSets;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
*/
var DataAwsGlobalacceleratorAccelerator = /** @class */ (function (_super) {
    __extends(DataAwsGlobalacceleratorAccelerator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlobalacceleratorAcceleratorConfig = {}
    */
    function DataAwsGlobalacceleratorAccelerator(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_globalaccelerator_accelerator',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // attributes - computed: true, optional: false, required: false
    DataAwsGlobalacceleratorAccelerator.prototype.attributes = function (index) {
        return new DataAwsGlobalacceleratorAcceleratorAttributes(this, 'attributes', index);
    };
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "ipAddressType", {
        // ip_address_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        enumerable: false,
        configurable: true
    });
    // ip_sets - computed: true, optional: false, required: false
    DataAwsGlobalacceleratorAccelerator.prototype.ipSets = function (index) {
        return new DataAwsGlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
    };
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsGlobalacceleratorAccelerator.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsGlobalacceleratorAccelerator.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsGlobalacceleratorAccelerator.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsGlobalacceleratorAccelerator.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsGlobalacceleratorAccelerator.tfResourceType = "aws_globalaccelerator_accelerator";
    return DataAwsGlobalacceleratorAccelerator;
}(cdktf.TerraformDataSource));
exports.DataAwsGlobalacceleratorAccelerator = DataAwsGlobalacceleratorAccelerator;
