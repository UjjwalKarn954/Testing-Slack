"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html
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
exports.DxHostedConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection}
*/
var DxHostedConnection = /** @class */ (function (_super) {
    __extends(DxHostedConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedConnectionConfig
    */
    function DxHostedConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_hosted_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bandwidth = config.bandwidth;
        _this._connectionId = config.connectionId;
        _this._name = config.name;
        _this._ownerAccountId = config.ownerAccountId;
        _this._vlan = config.vlan;
        return _this;
    }
    Object.defineProperty(DxHostedConnection.prototype, "awsDevice", {
        // ==========
        // ATTRIBUTES
        // ==========
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "bandwidth", {
        get: function () {
            return this.getStringAttribute('bandwidth');
        },
        set: function (value) {
            this._bandwidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "bandwidthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bandwidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "hasLogicalRedundancy", {
        // has_logical_redundancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('has_logical_redundancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "jumboFrameCapable", {
        // jumbo_frame_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('jumbo_frame_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "lagId", {
        // lag_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lag_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "loaIssueTime", {
        // loa_issue_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('loa_issue_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "ownerAccountId", {
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        set: function (value) {
            this._ownerAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "ownerAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "partnerName", {
        // partner_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('partner_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "providerName", {
        // provider_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provider_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "vlan", {
        get: function () {
            return this.getNumberAttribute('vlan');
        },
        set: function (value) {
            this._vlan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedConnection.prototype, "vlanInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vlan;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DxHostedConnection.prototype.synthesizeAttributes = function () {
        return {
            bandwidth: cdktf.stringToTerraform(this._bandwidth),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            name: cdktf.stringToTerraform(this._name),
            owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
            vlan: cdktf.numberToTerraform(this._vlan)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxHostedConnection.tfResourceType = "aws_dx_hosted_connection";
    return DxHostedConnection;
}(cdktf.TerraformResource));
exports.DxHostedConnection = DxHostedConnection;
