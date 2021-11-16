"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html
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
exports.DataAwsVpcPeeringConnection = exports.DataAwsVpcPeeringConnectionPeerCidrBlockSet = exports.DataAwsVpcPeeringConnectionCidrBlockSet = void 0;
var cdktf = require("cdktf");
var DataAwsVpcPeeringConnectionCidrBlockSet = /** @class */ (function (_super) {
    __extends(DataAwsVpcPeeringConnectionCidrBlockSet, _super);
    function DataAwsVpcPeeringConnectionCidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsVpcPeeringConnectionCidrBlockSet.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsVpcPeeringConnectionCidrBlockSet;
}(cdktf.ComplexComputedList));
exports.DataAwsVpcPeeringConnectionCidrBlockSet = DataAwsVpcPeeringConnectionCidrBlockSet;
var DataAwsVpcPeeringConnectionPeerCidrBlockSet = /** @class */ (function (_super) {
    __extends(DataAwsVpcPeeringConnectionPeerCidrBlockSet, _super);
    function DataAwsVpcPeeringConnectionPeerCidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsVpcPeeringConnectionPeerCidrBlockSet.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsVpcPeeringConnectionPeerCidrBlockSet;
}(cdktf.ComplexComputedList));
exports.DataAwsVpcPeeringConnectionPeerCidrBlockSet = DataAwsVpcPeeringConnectionPeerCidrBlockSet;
function dataAwsVpcPeeringConnectionFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}
*/
var DataAwsVpcPeeringConnection = /** @class */ (function (_super) {
    __extends(DataAwsVpcPeeringConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionConfig = {}
    */
    function DataAwsVpcPeeringConnection(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._cidrBlock = config.cidrBlock;
        _this._ownerId = config.ownerId;
        _this._peerCidrBlock = config.peerCidrBlock;
        _this._peerOwnerId = config.peerOwnerId;
        _this._peerRegion = config.peerRegion;
        _this._peerVpcId = config.peerVpcId;
        _this._region = config.region;
        _this._status = config.status;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._filter = config.filter;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accepter - computed: true, optional: false, required: false
    DataAwsVpcPeeringConnection.prototype.accepter = function (key) {
        return new cdktf.BooleanMap(this, 'accepter').lookup(key);
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetCidrBlock = function () {
        this._cidrBlock = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    // cidr_block_set - computed: true, optional: false, required: false
    DataAwsVpcPeeringConnection.prototype.cidrBlockSet = function (index) {
        return new DataAwsVpcPeeringConnectionCidrBlockSet(this, 'cidr_block_set', index);
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerCidrBlock", {
        get: function () {
            return this.getStringAttribute('peer_cidr_block');
        },
        set: function (value) {
            this._peerCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetPeerCidrBlock = function () {
        this._peerCidrBlock = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    // peer_cidr_block_set - computed: true, optional: false, required: false
    DataAwsVpcPeeringConnection.prototype.peerCidrBlockSet = function (index) {
        return new DataAwsVpcPeeringConnectionPeerCidrBlockSet(this, 'peer_cidr_block_set', index);
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerOwnerId", {
        get: function () {
            return this.getStringAttribute('peer_owner_id');
        },
        set: function (value) {
            this._peerOwnerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetPeerOwnerId = function () {
        this._peerOwnerId = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerOwnerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerOwnerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerRegion", {
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        set: function (value) {
            this._peerRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetPeerRegion = function () {
        this._peerRegion = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerVpcId", {
        get: function () {
            return this.getStringAttribute('peer_vpc_id');
        },
        set: function (value) {
            this._peerVpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetPeerVpcId = function () {
        this._peerVpcId = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "peerVpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerVpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    // requester - computed: true, optional: false, required: false
    DataAwsVpcPeeringConnection.prototype.requester = function (key) {
        return new cdktf.BooleanMap(this, 'requester').lookup(key);
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcPeeringConnection.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpcPeeringConnection.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsVpcPeeringConnection.prototype.synthesizeAttributes = function () {
        return {
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            owner_id: cdktf.stringToTerraform(this._ownerId),
            peer_cidr_block: cdktf.stringToTerraform(this._peerCidrBlock),
            peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
            peer_region: cdktf.stringToTerraform(this._peerRegion),
            peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
            region: cdktf.stringToTerraform(this._region),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsVpcPeeringConnectionFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpcPeeringConnection.tfResourceType = "aws_vpc_peering_connection";
    return DataAwsVpcPeeringConnection;
}(cdktf.TerraformDataSource));
exports.DataAwsVpcPeeringConnection = DataAwsVpcPeeringConnection;
