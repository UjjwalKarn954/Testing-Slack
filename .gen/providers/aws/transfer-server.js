"use strict";
// https://www.terraform.io/docs/providers/aws/r/transfer_server.html
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
exports.TransferServer = void 0;
var cdktf = require("cdktf");
function transferServerEndpointDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address_allocation_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.addressAllocationIds),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
        vpc_endpoint_id: cdktf.stringToTerraform(struct.vpcEndpointId),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server}
*/
var TransferServer = /** @class */ (function (_super) {
    __extends(TransferServer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferServerConfig = {}
    */
    function TransferServer(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._certificate = config.certificate;
        _this._directoryId = config.directoryId;
        _this._domain = config.domain;
        _this._endpointType = config.endpointType;
        _this._forceDestroy = config.forceDestroy;
        _this._hostKey = config.hostKey;
        _this._identityProviderType = config.identityProviderType;
        _this._invocationRole = config.invocationRole;
        _this._loggingRole = config.loggingRole;
        _this._protocols = config.protocols;
        _this._securityPolicyName = config.securityPolicyName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._url = config.url;
        _this._endpointDetails = config.endpointDetails;
        return _this;
    }
    Object.defineProperty(TransferServer.prototype, "arn", {
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
    Object.defineProperty(TransferServer.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetCertificate = function () {
        this._certificate = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetDirectoryId = function () {
        this._directoryId = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "endpointType", {
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        set: function (value) {
            this._endpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetEndpointType = function () {
        this._endpointType = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "endpointTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "hostKey", {
        get: function () {
            return this.getStringAttribute('host_key');
        },
        set: function (value) {
            this._hostKey = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetHostKey = function () {
        this._hostKey = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "hostKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "hostKeyFingerprint", {
        // host_key_fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_key_fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "identityProviderType", {
        get: function () {
            return this.getStringAttribute('identity_provider_type');
        },
        set: function (value) {
            this._identityProviderType = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetIdentityProviderType = function () {
        this._identityProviderType = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "identityProviderTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "invocationRole", {
        get: function () {
            return this.getStringAttribute('invocation_role');
        },
        set: function (value) {
            this._invocationRole = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetInvocationRole = function () {
        this._invocationRole = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "invocationRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invocationRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "loggingRole", {
        get: function () {
            return this.getStringAttribute('logging_role');
        },
        set: function (value) {
            this._loggingRole = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetLoggingRole = function () {
        this._loggingRole = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "loggingRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "protocols", {
        get: function () {
            return this.getListAttribute('protocols');
        },
        set: function (value) {
            this._protocols = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetProtocols = function () {
        this._protocols = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "protocolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "securityPolicyName", {
        get: function () {
            return this.getStringAttribute('security_policy_name');
        },
        set: function (value) {
            this._securityPolicyName = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetSecurityPolicyName = function () {
        this._securityPolicyName = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "securityPolicyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityPolicyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferServer.prototype, "endpointDetails", {
        get: function () {
            return this.interpolationForAttribute('endpoint_details');
        },
        set: function (value) {
            this._endpointDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    TransferServer.prototype.resetEndpointDetails = function () {
        this._endpointDetails = undefined;
    };
    Object.defineProperty(TransferServer.prototype, "endpointDetailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointDetails;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TransferServer.prototype.synthesizeAttributes = function () {
        return {
            certificate: cdktf.stringToTerraform(this._certificate),
            directory_id: cdktf.stringToTerraform(this._directoryId),
            domain: cdktf.stringToTerraform(this._domain),
            endpoint_type: cdktf.stringToTerraform(this._endpointType),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            host_key: cdktf.stringToTerraform(this._hostKey),
            identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
            invocation_role: cdktf.stringToTerraform(this._invocationRole),
            logging_role: cdktf.stringToTerraform(this._loggingRole),
            protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
            security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            url: cdktf.stringToTerraform(this._url),
            endpoint_details: cdktf.listMapper(transferServerEndpointDetailsToTerraform)(this._endpointDetails)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TransferServer.tfResourceType = "aws_transfer_server";
    return TransferServer;
}(cdktf.TerraformResource));
exports.TransferServer = TransferServer;
