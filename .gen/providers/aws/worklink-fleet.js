"use strict";
// https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html
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
exports.WorklinkFleet = void 0;
var cdktf = require("cdktf");
function worklinkFleetIdentityProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        saml_metadata: cdktf.stringToTerraform(struct.samlMetadata),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function worklinkFleetNetworkToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet}
*/
var WorklinkFleet = /** @class */ (function (_super) {
    __extends(WorklinkFleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkFleetConfig
    */
    function WorklinkFleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_worklink_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._auditStreamArn = config.auditStreamArn;
        _this._deviceCaCertificate = config.deviceCaCertificate;
        _this._displayName = config.displayName;
        _this._name = config.name;
        _this._optimizeForEndUserLocation = config.optimizeForEndUserLocation;
        _this._identityProvider = config.identityProvider;
        _this._network = config.network;
        return _this;
    }
    Object.defineProperty(WorklinkFleet.prototype, "arn", {
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
    Object.defineProperty(WorklinkFleet.prototype, "auditStreamArn", {
        get: function () {
            return this.getStringAttribute('audit_stream_arn');
        },
        set: function (value) {
            this._auditStreamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetAuditStreamArn = function () {
        this._auditStreamArn = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "auditStreamArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditStreamArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "companyCode", {
        // company_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('company_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "deviceCaCertificate", {
        get: function () {
            return this.getStringAttribute('device_ca_certificate');
        },
        set: function (value) {
            this._deviceCaCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetDeviceCaCertificate = function () {
        this._deviceCaCertificate = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "deviceCaCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceCaCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "lastUpdatedTime", {
        // last_updated_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "optimizeForEndUserLocation", {
        get: function () {
            return this.getBooleanAttribute('optimize_for_end_user_location');
        },
        set: function (value) {
            this._optimizeForEndUserLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetOptimizeForEndUserLocation = function () {
        this._optimizeForEndUserLocation = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "optimizeForEndUserLocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optimizeForEndUserLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "identityProvider", {
        get: function () {
            return this.interpolationForAttribute('identity_provider');
        },
        set: function (value) {
            this._identityProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetIdentityProvider = function () {
        this._identityProvider = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "identityProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkFleet.prototype, "network", {
        get: function () {
            return this.interpolationForAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkFleet.prototype.resetNetwork = function () {
        this._network = undefined;
    };
    Object.defineProperty(WorklinkFleet.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorklinkFleet.prototype.synthesizeAttributes = function () {
        return {
            audit_stream_arn: cdktf.stringToTerraform(this._auditStreamArn),
            device_ca_certificate: cdktf.stringToTerraform(this._deviceCaCertificate),
            display_name: cdktf.stringToTerraform(this._displayName),
            name: cdktf.stringToTerraform(this._name),
            optimize_for_end_user_location: cdktf.booleanToTerraform(this._optimizeForEndUserLocation),
            identity_provider: cdktf.listMapper(worklinkFleetIdentityProviderToTerraform)(this._identityProvider),
            network: cdktf.listMapper(worklinkFleetNetworkToTerraform)(this._network)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WorklinkFleet.tfResourceType = "aws_worklink_fleet";
    return WorklinkFleet;
}(cdktf.TerraformResource));
exports.WorklinkFleet = WorklinkFleet;
