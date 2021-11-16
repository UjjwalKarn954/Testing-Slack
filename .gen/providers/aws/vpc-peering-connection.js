"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html
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
exports.VpcPeeringConnection = void 0;
var cdktf = require("cdktf");
function vpcPeeringConnectionAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
    };
}
function vpcPeeringConnectionRequesterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
    };
}
function vpcPeeringConnectionTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}
*/
var VpcPeeringConnection = /** @class */ (function (_super) {
    __extends(VpcPeeringConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionConfig
    */
    function VpcPeeringConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoAccept = config.autoAccept;
        _this._peerOwnerId = config.peerOwnerId;
        _this._peerRegion = config.peerRegion;
        _this._peerVpcId = config.peerVpcId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._accepter = config.accepter;
        _this._requester = config.requester;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(VpcPeeringConnection.prototype, "acceptStatus", {
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
    Object.defineProperty(VpcPeeringConnection.prototype, "autoAccept", {
        get: function () {
            return this.getBooleanAttribute('auto_accept');
        },
        set: function (value) {
            this._autoAccept = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetAutoAccept = function () {
        this._autoAccept = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "autoAcceptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAccept;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "peerOwnerId", {
        get: function () {
            return this.getStringAttribute('peer_owner_id');
        },
        set: function (value) {
            this._peerOwnerId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetPeerOwnerId = function () {
        this._peerOwnerId = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "peerOwnerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerOwnerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "peerRegion", {
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        set: function (value) {
            this._peerRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetPeerRegion = function () {
        this._peerRegion = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "peerRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "peerVpcId", {
        get: function () {
            return this.getStringAttribute('peer_vpc_id');
        },
        set: function (value) {
            this._peerVpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "peerVpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerVpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "accepter", {
        get: function () {
            return this.interpolationForAttribute('accepter');
        },
        set: function (value) {
            this._accepter = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetAccepter = function () {
        this._accepter = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "accepterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accepter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "requester", {
        get: function () {
            return this.interpolationForAttribute('requester');
        },
        set: function (value) {
            this._requester = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetRequester = function () {
        this._requester = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "requesterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requester;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnection.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnection.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(VpcPeeringConnection.prototype, "timeoutsInput", {
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
    VpcPeeringConnection.prototype.synthesizeAttributes = function () {
        return {
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
            peer_region: cdktf.stringToTerraform(this._peerRegion),
            peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            accepter: cdktf.listMapper(vpcPeeringConnectionAccepterToTerraform)(this._accepter),
            requester: cdktf.listMapper(vpcPeeringConnectionRequesterToTerraform)(this._requester),
            timeouts: vpcPeeringConnectionTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcPeeringConnection.tfResourceType = "aws_vpc_peering_connection";
    return VpcPeeringConnection;
}(cdktf.TerraformResource));
exports.VpcPeeringConnection = VpcPeeringConnection;
