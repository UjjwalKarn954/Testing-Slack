"use strict";
// https://www.terraform.io/docs/providers/aws/r/default_security_group.html
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
exports.DefaultSecurityGroup = void 0;
var cdktf = require("cdktf");
function defaultSecurityGroupEgressToTerraform(struct) {
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
function defaultSecurityGroupIngressToTerraform(struct) {
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
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}
*/
var DefaultSecurityGroup = /** @class */ (function (_super) {
    __extends(DefaultSecurityGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSecurityGroupConfig = {}
    */
    function DefaultSecurityGroup(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_default_security_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._egress = config.egress;
        _this._ingress = config.ingress;
        _this._revokeRulesOnDelete = config.revokeRulesOnDelete;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(DefaultSecurityGroup.prototype, "arn", {
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
    Object.defineProperty(DefaultSecurityGroup.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "egress", {
        get: function () {
            return this.interpolationForAttribute('egress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._egress = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetEgress = function () {
        this._egress = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "ingress", {
        get: function () {
            return this.interpolationForAttribute('ingress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetIngress = function () {
        this._ingress = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "revokeRulesOnDelete", {
        get: function () {
            return this.getBooleanAttribute('revoke_rules_on_delete');
        },
        set: function (value) {
            this._revokeRulesOnDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetRevokeRulesOnDelete = function () {
        this._revokeRulesOnDelete = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "revokeRulesOnDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._revokeRulesOnDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSecurityGroup.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSecurityGroup.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DefaultSecurityGroup.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DefaultSecurityGroup.prototype.synthesizeAttributes = function () {
        return {
            egress: cdktf.listMapper(defaultSecurityGroupEgressToTerraform)(this._egress),
            ingress: cdktf.listMapper(defaultSecurityGroupIngressToTerraform)(this._ingress),
            revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DefaultSecurityGroup.tfResourceType = "aws_default_security_group";
    return DefaultSecurityGroup;
}(cdktf.TerraformResource));
exports.DefaultSecurityGroup = DefaultSecurityGroup;