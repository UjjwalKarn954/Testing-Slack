"use strict";
// https://www.terraform.io/docs/providers/aws/r/default_network_acl.html
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
exports.DefaultNetworkAcl = void 0;
var cdktf = require("cdktf");
function defaultNetworkAclEgressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        cidr_block: cdktf.stringToTerraform(struct.cidrBlock),
        from_port: cdktf.numberToTerraform(struct.fromPort),
        icmp_code: cdktf.numberToTerraform(struct.icmpCode),
        icmp_type: cdktf.numberToTerraform(struct.icmpType),
        ipv6_cidr_block: cdktf.stringToTerraform(struct.ipv6CidrBlock),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_no: cdktf.numberToTerraform(struct.ruleNo),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function defaultNetworkAclIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        cidr_block: cdktf.stringToTerraform(struct.cidrBlock),
        from_port: cdktf.numberToTerraform(struct.fromPort),
        icmp_code: cdktf.numberToTerraform(struct.icmpCode),
        icmp_type: cdktf.numberToTerraform(struct.icmpType),
        ipv6_cidr_block: cdktf.stringToTerraform(struct.ipv6CidrBlock),
        protocol: cdktf.stringToTerraform(struct.protocol),
        rule_no: cdktf.numberToTerraform(struct.ruleNo),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl}
*/
var DefaultNetworkAcl = /** @class */ (function (_super) {
    __extends(DefaultNetworkAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultNetworkAclConfig
    */
    function DefaultNetworkAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_default_network_acl',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultNetworkAclId = config.defaultNetworkAclId;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._egress = config.egress;
        _this._ingress = config.ingress;
        return _this;
    }
    Object.defineProperty(DefaultNetworkAcl.prototype, "arn", {
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
    Object.defineProperty(DefaultNetworkAcl.prototype, "defaultNetworkAclId", {
        get: function () {
            return this.getStringAttribute('default_network_acl_id');
        },
        set: function (value) {
            this._defaultNetworkAclId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "defaultNetworkAclIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultNetworkAclId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultNetworkAcl.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(DefaultNetworkAcl.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultNetworkAcl.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DefaultNetworkAcl.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultNetworkAcl.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DefaultNetworkAcl.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "egress", {
        get: function () {
            return this.interpolationForAttribute('egress');
        },
        set: function (value) {
            this._egress = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultNetworkAcl.prototype.resetEgress = function () {
        this._egress = undefined;
    };
    Object.defineProperty(DefaultNetworkAcl.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultNetworkAcl.prototype, "ingress", {
        get: function () {
            return this.interpolationForAttribute('ingress');
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultNetworkAcl.prototype.resetIngress = function () {
        this._ingress = undefined;
    };
    Object.defineProperty(DefaultNetworkAcl.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DefaultNetworkAcl.prototype.synthesizeAttributes = function () {
        return {
            default_network_acl_id: cdktf.stringToTerraform(this._defaultNetworkAclId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            egress: cdktf.listMapper(defaultNetworkAclEgressToTerraform)(this._egress),
            ingress: cdktf.listMapper(defaultNetworkAclIngressToTerraform)(this._ingress)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DefaultNetworkAcl.tfResourceType = "aws_default_network_acl";
    return DefaultNetworkAcl;
}(cdktf.TerraformResource));
exports.DefaultNetworkAcl = DefaultNetworkAcl;
