"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html
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
exports.VpcPeeringConnectionAccepterA = void 0;
var cdktf = require("cdktf");
function vpcPeeringConnectionAccepterAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
    };
}
function vpcPeeringConnectionAccepterRequesterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}
*/
var VpcPeeringConnectionAccepterA = /** @class */ (function (_super) {
    __extends(VpcPeeringConnectionAccepterA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    function VpcPeeringConnectionAccepterA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoAccept = config.autoAccept;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        _this._accepter = config.accepter;
        _this._requester = config.requester;
        return _this;
    }
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "acceptStatus", {
        // ==========
        // ATTRIBUTES
        // ==========
        // accept_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('accept_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "autoAccept", {
        get: function () {
            return this.getBooleanAttribute('auto_accept');
        },
        set: function (value) {
            this._autoAccept = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionAccepterA.prototype.resetAutoAccept = function () {
        this._autoAccept = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "autoAcceptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAccept;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerOwnerId", {
        // peer_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerRegion", {
        // peer_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "peerVpcId", {
        // peer_vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionAccepterA.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionAccepterA.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcPeeringConnectionId", {
        get: function () {
            return this.getStringAttribute('vpc_peering_connection_id');
        },
        set: function (value) {
            this._vpcPeeringConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "vpcPeeringConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcPeeringConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "accepter", {
        get: function () {
            return this.interpolationForAttribute('accepter');
        },
        set: function (value) {
            this._accepter = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionAccepterA.prototype.resetAccepter = function () {
        this._accepter = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "accepterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accepter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "requester", {
        get: function () {
            return this.interpolationForAttribute('requester');
        },
        set: function (value) {
            this._requester = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionAccepterA.prototype.resetRequester = function () {
        this._requester = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionAccepterA.prototype, "requesterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requester;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcPeeringConnectionAccepterA.prototype.synthesizeAttributes = function () {
        return {
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: cdktf.listMapper(vpcPeeringConnectionAccepterAccepterToTerraform)(this._accepter),
            requester: cdktf.listMapper(vpcPeeringConnectionAccepterRequesterToTerraform)(this._requester)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcPeeringConnectionAccepterA.tfResourceType = "aws_vpc_peering_connection_accepter";
    return VpcPeeringConnectionAccepterA;
}(cdktf.TerraformResource));
exports.VpcPeeringConnectionAccepterA = VpcPeeringConnectionAccepterA;
