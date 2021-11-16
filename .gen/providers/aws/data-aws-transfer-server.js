"use strict";
// https://www.terraform.io/docs/providers/aws/d/transfer_server.html
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
exports.DataAwsTransferServer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server}
*/
var DataAwsTransferServer = /** @class */ (function (_super) {
    __extends(DataAwsTransferServer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTransferServerConfig
    */
    function DataAwsTransferServer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_transfer_server',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._serverId = config.serverId;
        return _this;
    }
    Object.defineProperty(DataAwsTransferServer.prototype, "arn", {
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
    Object.defineProperty(DataAwsTransferServer.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "endpointType", {
        // endpoint_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "identityProviderType", {
        // identity_provider_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_provider_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "invocationRole", {
        // invocation_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invocation_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "loggingRole", {
        // logging_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logging_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "protocols", {
        // protocols - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('protocols');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "securityPolicyName", {
        // security_policy_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_policy_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "serverId", {
        get: function () {
            return this.getStringAttribute('server_id');
        },
        set: function (value) {
            this._serverId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "serverIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsTransferServer.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsTransferServer.prototype.synthesizeAttributes = function () {
        return {
            server_id: cdktf.stringToTerraform(this._serverId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsTransferServer.tfResourceType = "aws_transfer_server";
    return DataAwsTransferServer;
}(cdktf.TerraformDataSource));
exports.DataAwsTransferServer = DataAwsTransferServer;
