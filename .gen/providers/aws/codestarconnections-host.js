"use strict";
// https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html
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
exports.CodestarconnectionsHost = void 0;
var cdktf = require("cdktf");
function codestarconnectionsHostVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
        tls_certificate: cdktf.stringToTerraform(struct.tlsCertificate),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host}
*/
var CodestarconnectionsHost = /** @class */ (function (_super) {
    __extends(CodestarconnectionsHost, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsHostConfig
    */
    function CodestarconnectionsHost(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codestarconnections_host',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._providerEndpoint = config.providerEndpoint;
        _this._providerType = config.providerType;
        _this._vpcConfiguration = config.vpcConfiguration;
        return _this;
    }
    Object.defineProperty(CodestarconnectionsHost.prototype, "arn", {
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
    Object.defineProperty(CodestarconnectionsHost.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "providerEndpoint", {
        get: function () {
            return this.getStringAttribute('provider_endpoint');
        },
        set: function (value) {
            this._providerEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "providerEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "providerType", {
        get: function () {
            return this.getStringAttribute('provider_type');
        },
        set: function (value) {
            this._providerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "providerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsHost.prototype, "vpcConfiguration", {
        get: function () {
            return this.interpolationForAttribute('vpc_configuration');
        },
        set: function (value) {
            this._vpcConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarconnectionsHost.prototype.resetVpcConfiguration = function () {
        this._vpcConfiguration = undefined;
    };
    Object.defineProperty(CodestarconnectionsHost.prototype, "vpcConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodestarconnectionsHost.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            provider_endpoint: cdktf.stringToTerraform(this._providerEndpoint),
            provider_type: cdktf.stringToTerraform(this._providerType),
            vpc_configuration: cdktf.listMapper(codestarconnectionsHostVpcConfigurationToTerraform)(this._vpcConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodestarconnectionsHost.tfResourceType = "aws_codestarconnections_host";
    return CodestarconnectionsHost;
}(cdktf.TerraformResource));
exports.CodestarconnectionsHost = CodestarconnectionsHost;
