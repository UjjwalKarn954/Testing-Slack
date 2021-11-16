"use strict";
// https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html
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
exports.RamResourceShareAccepter = void 0;
var cdktf = require("cdktf");
function ramResourceShareAccepterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter}
*/
var RamResourceShareAccepter = /** @class */ (function (_super) {
    __extends(RamResourceShareAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareAccepterConfig
    */
    function RamResourceShareAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ram_resource_share_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._shareArn = config.shareArn;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RamResourceShareAccepter.prototype, "id", {
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
    Object.defineProperty(RamResourceShareAccepter.prototype, "invitationArn", {
        // invitation_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invitation_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "receiverAccountId", {
        // receiver_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('receiver_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "resources", {
        // resources - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('resources');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "senderAccountId", {
        // sender_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sender_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "shareArn", {
        get: function () {
            return this.getStringAttribute('share_arn');
        },
        set: function (value) {
            this._shareArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "shareArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shareArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "shareId", {
        // share_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "shareName", {
        // share_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShareAccepter.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RamResourceShareAccepter.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RamResourceShareAccepter.prototype, "timeoutsInput", {
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
    RamResourceShareAccepter.prototype.synthesizeAttributes = function () {
        return {
            share_arn: cdktf.stringToTerraform(this._shareArn),
            timeouts: ramResourceShareAccepterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RamResourceShareAccepter.tfResourceType = "aws_ram_resource_share_accepter";
    return RamResourceShareAccepter;
}(cdktf.TerraformResource));
exports.RamResourceShareAccepter = RamResourceShareAccepter;
