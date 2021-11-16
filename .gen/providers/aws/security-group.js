"use strict";
// https://www.terraform.io/docs/providers/aws/r/security_group.html
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
exports.SecurityGroup = void 0;
var cdktf = require("cdktf");
function securityGroupEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
        description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
        from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
        ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
        prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
        protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
        security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
        to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
    };
}
function securityGroupIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr_blocks: struct.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrBlocks),
        description: struct.description === undefined ? null : cdktf.stringToTerraform(struct.description),
        from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
        ipv6_cidr_blocks: struct.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6CidrBlocks),
        prefix_list_ids: struct.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.prefixListIds),
        protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
        security_groups: struct.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        self: struct.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct.selfAttribute),
        to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
    };
}
function securityGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}
*/
var SecurityGroup = /** @class */ (function (_super) {
    __extends(SecurityGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupConfig = {}
    */
    function SecurityGroup(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_security_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._egress = config.egress;
        _this._ingress = config.ingress;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._revokeRulesOnDelete = config.revokeRulesOnDelete;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(SecurityGroup.prototype, "arn", {
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
    Object.defineProperty(SecurityGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "egress", {
        get: function () {
            return this.interpolationForAttribute('egress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._egress = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetEgress = function () {
        this._egress = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "ingress", {
        get: function () {
            return this.interpolationForAttribute('ingress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetIngress = function () {
        this._ingress = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "revokeRulesOnDelete", {
        get: function () {
            return this.getBooleanAttribute('revoke_rules_on_delete');
        },
        set: function (value) {
            this._revokeRulesOnDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetRevokeRulesOnDelete = function () {
        this._revokeRulesOnDelete = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "revokeRulesOnDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._revokeRulesOnDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(SecurityGroup.prototype, "timeoutsInput", {
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
    SecurityGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            egress: cdktf.listMapper(securityGroupEgressToTerraform)(this._egress),
            ingress: cdktf.listMapper(securityGroupIngressToTerraform)(this._ingress),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: securityGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityGroup.tfResourceType = "aws_security_group";
    return SecurityGroup;
}(cdktf.TerraformResource));
exports.SecurityGroup = SecurityGroup;
