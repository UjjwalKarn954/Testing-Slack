"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html
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
exports.VpcPeeringConnectionOptions = void 0;
var cdktf = require("cdktf");
function vpcPeeringConnectionOptionsAccepterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct.allowClassicLinkToRemoteVpc),
        allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct.allowRemoteVpcDnsResolution),
        allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct.allowVpcToRemoteClassicLink)
    };
}
function vpcPeeringConnectionOptionsRequesterToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
*/
var VpcPeeringConnectionOptions = /** @class */ (function (_super) {
    __extends(VpcPeeringConnectionOptions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    function VpcPeeringConnectionOptions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_peering_connection_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        _this._accepter = config.accepter;
        _this._requester = config.requester;
        return _this;
    }
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "vpcPeeringConnectionId", {
        get: function () {
            return this.getStringAttribute('vpc_peering_connection_id');
        },
        set: function (value) {
            this._vpcPeeringConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "vpcPeeringConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcPeeringConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "accepter", {
        get: function () {
            return this.interpolationForAttribute('accepter');
        },
        set: function (value) {
            this._accepter = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionOptions.prototype.resetAccepter = function () {
        this._accepter = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "accepterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accepter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "requester", {
        get: function () {
            return this.interpolationForAttribute('requester');
        },
        set: function (value) {
            this._requester = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcPeeringConnectionOptions.prototype.resetRequester = function () {
        this._requester = undefined;
    };
    Object.defineProperty(VpcPeeringConnectionOptions.prototype, "requesterInput", {
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
    VpcPeeringConnectionOptions.prototype.synthesizeAttributes = function () {
        return {
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
            accepter: cdktf.listMapper(vpcPeeringConnectionOptionsAccepterToTerraform)(this._accepter),
            requester: cdktf.listMapper(vpcPeeringConnectionOptionsRequesterToTerraform)(this._requester)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcPeeringConnectionOptions.tfResourceType = "aws_vpc_peering_connection_options";
    return VpcPeeringConnectionOptions;
}(cdktf.TerraformResource));
exports.VpcPeeringConnectionOptions = VpcPeeringConnectionOptions;
