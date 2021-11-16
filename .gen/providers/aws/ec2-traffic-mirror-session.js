"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html
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
exports.Ec2TrafficMirrorSession = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session}
*/
var Ec2TrafficMirrorSession = /** @class */ (function (_super) {
    __extends(Ec2TrafficMirrorSession, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorSessionConfig
    */
    function Ec2TrafficMirrorSession(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_traffic_mirror_session',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._packetLength = config.packetLength;
        _this._sessionNumber = config.sessionNumber;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._trafficMirrorFilterId = config.trafficMirrorFilterId;
        _this._trafficMirrorTargetId = config.trafficMirrorTargetId;
        _this._virtualNetworkId = config.virtualNetworkId;
        return _this;
    }
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "arn", {
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
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorSession.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "packetLength", {
        get: function () {
            return this.getNumberAttribute('packet_length');
        },
        set: function (value) {
            this._packetLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorSession.prototype.resetPacketLength = function () {
        this._packetLength = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "packetLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._packetLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "sessionNumber", {
        get: function () {
            return this.getNumberAttribute('session_number');
        },
        set: function (value) {
            this._sessionNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "sessionNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorSession.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorSession.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "trafficMirrorFilterId", {
        get: function () {
            return this.getStringAttribute('traffic_mirror_filter_id');
        },
        set: function (value) {
            this._trafficMirrorFilterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "trafficMirrorFilterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficMirrorFilterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "trafficMirrorTargetId", {
        get: function () {
            return this.getStringAttribute('traffic_mirror_target_id');
        },
        set: function (value) {
            this._trafficMirrorTargetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "trafficMirrorTargetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficMirrorTargetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "virtualNetworkId", {
        get: function () {
            return this.getNumberAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorSession.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorSession.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TrafficMirrorSession.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            packet_length: cdktf.numberToTerraform(this._packetLength),
            session_number: cdktf.numberToTerraform(this._sessionNumber),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
            traffic_mirror_target_id: cdktf.stringToTerraform(this._trafficMirrorTargetId),
            virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TrafficMirrorSession.tfResourceType = "aws_ec2_traffic_mirror_session";
    return Ec2TrafficMirrorSession;
}(cdktf.TerraformResource));
exports.Ec2TrafficMirrorSession = Ec2TrafficMirrorSession;
