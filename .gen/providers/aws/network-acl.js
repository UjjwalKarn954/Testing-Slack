"use strict";
// https://www.terraform.io/docs/providers/aws/r/network_acl.html
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
exports.NetworkAcl = void 0;
var cdktf = require("cdktf");
function networkAclEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: struct.action === undefined ? null : cdktf.stringToTerraform(struct.action),
        cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
        from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
        icmp_code: struct.icmpCode === undefined ? null : cdktf.numberToTerraform(struct.icmpCode),
        icmp_type: struct.icmpType === undefined ? null : cdktf.numberToTerraform(struct.icmpType),
        ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
        protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
        rule_no: struct.ruleNo === undefined ? null : cdktf.numberToTerraform(struct.ruleNo),
        to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
    };
}
function networkAclIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: struct.action === undefined ? null : cdktf.stringToTerraform(struct.action),
        cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
        from_port: struct.fromPort === undefined ? null : cdktf.numberToTerraform(struct.fromPort),
        icmp_code: struct.icmpCode === undefined ? null : cdktf.numberToTerraform(struct.icmpCode),
        icmp_type: struct.icmpType === undefined ? null : cdktf.numberToTerraform(struct.icmpType),
        ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
        protocol: struct.protocol === undefined ? null : cdktf.stringToTerraform(struct.protocol),
        rule_no: struct.ruleNo === undefined ? null : cdktf.numberToTerraform(struct.ruleNo),
        to_port: struct.toPort === undefined ? null : cdktf.numberToTerraform(struct.toPort)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl}
*/
var NetworkAcl = /** @class */ (function (_super) {
    __extends(NetworkAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclConfig
    */
    function NetworkAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_network_acl',
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
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(NetworkAcl.prototype, "arn", {
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
    Object.defineProperty(NetworkAcl.prototype, "egress", {
        get: function () {
            return this.interpolationForAttribute('egress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._egress = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAcl.prototype.resetEgress = function () {
        this._egress = undefined;
    };
    Object.defineProperty(NetworkAcl.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "ingress", {
        get: function () {
            return this.interpolationForAttribute('ingress'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAcl.prototype.resetIngress = function () {
        this._ingress = undefined;
    };
    Object.defineProperty(NetworkAcl.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAcl.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(NetworkAcl.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAcl.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NetworkAcl.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAcl.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NetworkAcl.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAcl.prototype, "vpcIdInput", {
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
    NetworkAcl.prototype.synthesizeAttributes = function () {
        return {
            egress: cdktf.listMapper(networkAclEgressToTerraform)(this._egress),
            ingress: cdktf.listMapper(networkAclIngressToTerraform)(this._ingress),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkAcl.tfResourceType = "aws_network_acl";
    return NetworkAcl;
}(cdktf.TerraformResource));
exports.NetworkAcl = NetworkAcl;
