"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_agent.html
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
exports.DatasyncAgent = void 0;
var cdktf = require("cdktf");
function datasyncAgentTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent}
*/
var DatasyncAgent = /** @class */ (function (_super) {
    __extends(DatasyncAgent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncAgentConfig = {}
    */
    function DatasyncAgent(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_agent',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._activationKey = config.activationKey;
        _this._ipAddress = config.ipAddress;
        _this._name = config.name;
        _this._privateLinkEndpoint = config.privateLinkEndpoint;
        _this._securityGroupArns = config.securityGroupArns;
        _this._subnetArns = config.subnetArns;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcEndpointId = config.vpcEndpointId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DatasyncAgent.prototype, "activationKey", {
        get: function () {
            return this.getStringAttribute('activation_key');
        },
        set: function (value) {
            this._activationKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetActivationKey = function () {
        this._activationKey = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "activationKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activationKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "privateLinkEndpoint", {
        get: function () {
            return this.getStringAttribute('private_link_endpoint');
        },
        set: function (value) {
            this._privateLinkEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetPrivateLinkEndpoint = function () {
        this._privateLinkEndpoint = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "privateLinkEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateLinkEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "securityGroupArns", {
        get: function () {
            return this.getListAttribute('security_group_arns');
        },
        set: function (value) {
            this._securityGroupArns = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetSecurityGroupArns = function () {
        this._securityGroupArns = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "securityGroupArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "subnetArns", {
        get: function () {
            return this.getListAttribute('subnet_arns');
        },
        set: function (value) {
            this._subnetArns = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetSubnetArns = function () {
        this._subnetArns = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "subnetArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "vpcEndpointId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_id');
        },
        set: function (value) {
            this._vpcEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetVpcEndpointId = function () {
        this._vpcEndpointId = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "vpcEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncAgent.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncAgent.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DatasyncAgent.prototype, "timeoutsInput", {
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
    DatasyncAgent.prototype.synthesizeAttributes = function () {
        return {
            activation_key: cdktf.stringToTerraform(this._activationKey),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            name: cdktf.stringToTerraform(this._name),
            private_link_endpoint: cdktf.stringToTerraform(this._privateLinkEndpoint),
            security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
            subnet_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetArns),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
            timeouts: datasyncAgentTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncAgent.tfResourceType = "aws_datasync_agent";
    return DatasyncAgent;
}(cdktf.TerraformResource));
exports.DatasyncAgent = DatasyncAgent;
