"use strict";
// https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html
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
exports.TransferSshKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key}
*/
var TransferSshKey = /** @class */ (function (_super) {
    __extends(TransferSshKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html aws_transfer_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferSshKeyConfig
    */
    function TransferSshKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_transfer_ssh_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._body = config.body;
        _this._serverId = config.serverId;
        _this._userName = config.userName;
        return _this;
    }
    Object.defineProperty(TransferSshKey.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "serverId", {
        get: function () {
            return this.getStringAttribute('server_id');
        },
        set: function (value) {
            this._serverId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "serverIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferSshKey.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TransferSshKey.prototype.synthesizeAttributes = function () {
        return {
            body: cdktf.stringToTerraform(this._body),
            server_id: cdktf.stringToTerraform(this._serverId),
            user_name: cdktf.stringToTerraform(this._userName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TransferSshKey.tfResourceType = "aws_transfer_ssh_key";
    return TransferSshKey;
}(cdktf.TerraformResource));
exports.TransferSshKey = TransferSshKey;
