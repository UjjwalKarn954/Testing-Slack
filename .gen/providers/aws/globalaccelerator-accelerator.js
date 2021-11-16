"use strict";
// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html
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
exports.GlobalacceleratorAccelerator = exports.GlobalacceleratorAcceleratorIpSets = void 0;
var cdktf = require("cdktf");
var GlobalacceleratorAcceleratorIpSets = /** @class */ (function (_super) {
    __extends(GlobalacceleratorAcceleratorIpSets, _super);
    function GlobalacceleratorAcceleratorIpSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GlobalacceleratorAcceleratorIpSets.prototype, "ipAddresses", {
        // ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAcceleratorIpSets.prototype, "ipFamily", {
        // ip_family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_family');
        },
        enumerable: false,
        configurable: true
    });
    return GlobalacceleratorAcceleratorIpSets;
}(cdktf.ComplexComputedList));
exports.GlobalacceleratorAcceleratorIpSets = GlobalacceleratorAcceleratorIpSets;
function globalacceleratorAcceleratorAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        flow_logs_enabled: cdktf.booleanToTerraform(struct.flowLogsEnabled),
        flow_logs_s3_bucket: cdktf.stringToTerraform(struct.flowLogsS3Bucket),
        flow_logs_s3_prefix: cdktf.stringToTerraform(struct.flowLogsS3Prefix)
    };
}
function globalacceleratorAcceleratorTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
*/
var GlobalacceleratorAccelerator = /** @class */ (function (_super) {
    __extends(GlobalacceleratorAccelerator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorAcceleratorConfig
    */
    function GlobalacceleratorAccelerator(scope, id, config) {
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
        _this._enabled = config.enabled;
        _this._ipAddressType = config.ipAddressType;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._attributes = config.attributes;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "dnsName", {
        // ==========
        // ATTRIBUTES
        // ==========
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "ipAddressType", {
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        set: function (value) {
            this._ipAddressType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetIpAddressType = function () {
        this._ipAddressType = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "ipAddressTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddressType;
        },
        enumerable: false,
        configurable: true
    });
    // ip_sets - computed: true, optional: false, required: false
    GlobalacceleratorAccelerator.prototype.ipSets = function (index) {
        return new GlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "attributes", {
        get: function () {
            return this.interpolationForAttribute('attributes');
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetAttributes = function () {
        this._attributes = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "attributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GlobalacceleratorAccelerator.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GlobalacceleratorAccelerator.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlobalacceleratorAccelerator.prototype.synthesizeAttributes = function () {
        return {
            enabled: cdktf.booleanToTerraform(this._enabled),
            ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            attributes: cdktf.listMapper(globalacceleratorAcceleratorAttributesToTerraform)(this._attributes),
            timeouts: globalacceleratorAcceleratorTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlobalacceleratorAccelerator.tfResourceType = "aws_globalaccelerator_accelerator";
    return GlobalacceleratorAccelerator;
}(cdktf.TerraformResource));
exports.GlobalacceleratorAccelerator = GlobalacceleratorAccelerator;
