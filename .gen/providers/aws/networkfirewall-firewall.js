"use strict";
// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html
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
exports.NetworkfirewallFirewall = exports.NetworkfirewallFirewallFirewallStatus = exports.NetworkfirewallFirewallFirewallStatusSyncStates = exports.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment = void 0;
var cdktf = require("cdktf");
var NetworkfirewallFirewallFirewallStatusSyncStatesAttachment = /** @class */ (function (_super) {
    __extends(NetworkfirewallFirewallFirewallStatusSyncStatesAttachment, _super);
    function NetworkfirewallFirewallFirewallStatusSyncStatesAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NetworkfirewallFirewallFirewallStatusSyncStatesAttachment.prototype, "endpointId", {
        // endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallFirewallStatusSyncStatesAttachment.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return NetworkfirewallFirewallFirewallStatusSyncStatesAttachment;
}(cdktf.ComplexComputedList));
exports.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment = NetworkfirewallFirewallFirewallStatusSyncStatesAttachment;
var NetworkfirewallFirewallFirewallStatusSyncStates = /** @class */ (function (_super) {
    __extends(NetworkfirewallFirewallFirewallStatusSyncStates, _super);
    function NetworkfirewallFirewallFirewallStatusSyncStates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NetworkfirewallFirewallFirewallStatusSyncStates.prototype, "attachment", {
        // attachment - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('attachment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallFirewallStatusSyncStates.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    return NetworkfirewallFirewallFirewallStatusSyncStates;
}(cdktf.ComplexComputedList));
exports.NetworkfirewallFirewallFirewallStatusSyncStates = NetworkfirewallFirewallFirewallStatusSyncStates;
var NetworkfirewallFirewallFirewallStatus = /** @class */ (function (_super) {
    __extends(NetworkfirewallFirewallFirewallStatus, _super);
    function NetworkfirewallFirewallFirewallStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NetworkfirewallFirewallFirewallStatus.prototype, "syncStates", {
        // sync_states - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('sync_states');
        },
        enumerable: false,
        configurable: true
    });
    return NetworkfirewallFirewallFirewallStatus;
}(cdktf.ComplexComputedList));
exports.NetworkfirewallFirewallFirewallStatus = NetworkfirewallFirewallFirewallStatus;
function networkfirewallFirewallSubnetMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subnet_id: cdktf.stringToTerraform(struct.subnetId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall}
*/
var NetworkfirewallFirewall = /** @class */ (function (_super) {
    __extends(NetworkfirewallFirewall, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallConfig
    */
    function NetworkfirewallFirewall(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_networkfirewall_firewall',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deleteProtection = config.deleteProtection;
        _this._description = config.description;
        _this._firewallPolicyArn = config.firewallPolicyArn;
        _this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
        _this._name = config.name;
        _this._subnetChangeProtection = config.subnetChangeProtection;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._subnetMapping = config.subnetMapping;
        return _this;
    }
    Object.defineProperty(NetworkfirewallFirewall.prototype, "arn", {
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
    Object.defineProperty(NetworkfirewallFirewall.prototype, "deleteProtection", {
        get: function () {
            return this.getBooleanAttribute('delete_protection');
        },
        set: function (value) {
            this._deleteProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetDeleteProtection = function () {
        this._deleteProtection = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "deleteProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "firewallPolicyArn", {
        get: function () {
            return this.getStringAttribute('firewall_policy_arn');
        },
        set: function (value) {
            this._firewallPolicyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "firewallPolicyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallPolicyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "firewallPolicyChangeProtection", {
        get: function () {
            return this.getBooleanAttribute('firewall_policy_change_protection');
        },
        set: function (value) {
            this._firewallPolicyChangeProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetFirewallPolicyChangeProtection = function () {
        this._firewallPolicyChangeProtection = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "firewallPolicyChangeProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallPolicyChangeProtection;
        },
        enumerable: false,
        configurable: true
    });
    // firewall_status - computed: true, optional: false, required: false
    NetworkfirewallFirewall.prototype.firewallStatus = function (index) {
        return new NetworkfirewallFirewallFirewallStatus(this, 'firewall_status', index);
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "subnetChangeProtection", {
        get: function () {
            return this.getBooleanAttribute('subnet_change_protection');
        },
        set: function (value) {
            this._subnetChangeProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetSubnetChangeProtection = function () {
        this._subnetChangeProtection = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "subnetChangeProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetChangeProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewall.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewall.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "updateToken", {
        // update_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('update_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "subnetMapping", {
        get: function () {
            return this.interpolationForAttribute('subnet_mapping');
        },
        set: function (value) {
            this._subnetMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewall.prototype, "subnetMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetMapping;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkfirewallFirewall.prototype.synthesizeAttributes = function () {
        return {
            delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
            description: cdktf.stringToTerraform(this._description),
            firewall_policy_arn: cdktf.stringToTerraform(this._firewallPolicyArn),
            firewall_policy_change_protection: cdktf.booleanToTerraform(this._firewallPolicyChangeProtection),
            name: cdktf.stringToTerraform(this._name),
            subnet_change_protection: cdktf.booleanToTerraform(this._subnetChangeProtection),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            subnet_mapping: cdktf.listMapper(networkfirewallFirewallSubnetMappingToTerraform)(this._subnetMapping)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkfirewallFirewall.tfResourceType = "aws_networkfirewall_firewall";
    return NetworkfirewallFirewall;
}(cdktf.TerraformResource));
exports.NetworkfirewallFirewall = NetworkfirewallFirewall;
