"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html
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
exports.CloudhsmV2Hsm = void 0;
var cdktf = require("cdktf");
function cloudhsmV2HsmTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm}
*/
var CloudhsmV2Hsm = /** @class */ (function (_super) {
    __extends(CloudhsmV2Hsm, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2HsmConfig
    */
    function CloudhsmV2Hsm(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudhsm_v2_hsm',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._clusterId = config.clusterId;
        _this._ipAddress = config.ipAddress;
        _this._subnetId = config.subnetId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudhsmV2Hsm.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Hsm.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(CloudhsmV2Hsm.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "hsmEniId", {
        // hsm_eni_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hsm_eni_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "hsmId", {
        // hsm_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hsm_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "hsmState", {
        // hsm_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hsm_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Hsm.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(CloudhsmV2Hsm.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Hsm.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(CloudhsmV2Hsm.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Hsm.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Hsm.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudhsmV2Hsm.prototype, "timeoutsInput", {
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
    CloudhsmV2Hsm.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            timeouts: cloudhsmV2HsmTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudhsmV2Hsm.tfResourceType = "aws_cloudhsm_v2_hsm";
    return CloudhsmV2Hsm;
}(cdktf.TerraformResource));
exports.CloudhsmV2Hsm = CloudhsmV2Hsm;
