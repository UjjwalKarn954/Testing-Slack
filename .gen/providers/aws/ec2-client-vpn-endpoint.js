"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html
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
exports.Ec2ClientVpnEndpoint = void 0;
var cdktf = require("cdktf");
function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        active_directory_id: cdktf.stringToTerraform(struct.activeDirectoryId),
        root_certificate_chain_arn: cdktf.stringToTerraform(struct.rootCertificateChainArn),
        saml_provider_arn: cdktf.stringToTerraform(struct.samlProviderArn),
        self_service_saml_provider_arn: cdktf.stringToTerraform(struct.selfServiceSamlProviderArn),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group: cdktf.stringToTerraform(struct.cloudwatchLogGroup),
        cloudwatch_log_stream: cdktf.stringToTerraform(struct.cloudwatchLogStream),
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}
*/
var Ec2ClientVpnEndpoint = /** @class */ (function (_super) {
    __extends(Ec2ClientVpnEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnEndpointConfig
    */
    function Ec2ClientVpnEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_client_vpn_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clientCidrBlock = config.clientCidrBlock;
        _this._description = config.description;
        _this._dnsServers = config.dnsServers;
        _this._selfServicePortal = config.selfServicePortal;
        _this._serverCertificateArn = config.serverCertificateArn;
        _this._splitTunnel = config.splitTunnel;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transportProtocol = config.transportProtocol;
        _this._authenticationOptions = config.authenticationOptions;
        _this._connectionLogOptions = config.connectionLogOptions;
        return _this;
    }
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "arn", {
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
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "clientCidrBlock", {
        get: function () {
            return this.getStringAttribute('client_cidr_block');
        },
        set: function (value) {
            this._clientCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "clientCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "dnsServers", {
        get: function () {
            return this.getListAttribute('dns_servers');
        },
        set: function (value) {
            this._dnsServers = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetDnsServers = function () {
        this._dnsServers = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "dnsServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "selfServicePortal", {
        get: function () {
            return this.getStringAttribute('self_service_portal');
        },
        set: function (value) {
            this._selfServicePortal = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetSelfServicePortal = function () {
        this._selfServicePortal = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "selfServicePortalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selfServicePortal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "serverCertificateArn", {
        get: function () {
            return this.getStringAttribute('server_certificate_arn');
        },
        set: function (value) {
            this._serverCertificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "serverCertificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverCertificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "splitTunnel", {
        get: function () {
            return this.getBooleanAttribute('split_tunnel');
        },
        set: function (value) {
            this._splitTunnel = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetSplitTunnel = function () {
        this._splitTunnel = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "splitTunnelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._splitTunnel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "transportProtocol", {
        get: function () {
            return this.getStringAttribute('transport_protocol');
        },
        set: function (value) {
            this._transportProtocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnEndpoint.prototype.resetTransportProtocol = function () {
        this._transportProtocol = undefined;
    };
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "transportProtocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transportProtocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "authenticationOptions", {
        get: function () {
            return this.interpolationForAttribute('authentication_options');
        },
        set: function (value) {
            this._authenticationOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "authenticationOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authenticationOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "connectionLogOptions", {
        get: function () {
            return this.interpolationForAttribute('connection_log_options');
        },
        set: function (value) {
            this._connectionLogOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnEndpoint.prototype, "connectionLogOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionLogOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ClientVpnEndpoint.prototype.synthesizeAttributes = function () {
        return {
            client_cidr_block: cdktf.stringToTerraform(this._clientCidrBlock),
            description: cdktf.stringToTerraform(this._description),
            dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
            self_service_portal: cdktf.stringToTerraform(this._selfServicePortal),
            server_certificate_arn: cdktf.stringToTerraform(this._serverCertificateArn),
            split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transport_protocol: cdktf.stringToTerraform(this._transportProtocol),
            authentication_options: cdktf.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform)(this._authenticationOptions),
            connection_log_options: cdktf.listMapper(ec2ClientVpnEndpointConnectionLogOptionsToTerraform)(this._connectionLogOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ClientVpnEndpoint.tfResourceType = "aws_ec2_client_vpn_endpoint";
    return Ec2ClientVpnEndpoint;
}(cdktf.TerraformResource));
exports.Ec2ClientVpnEndpoint = Ec2ClientVpnEndpoint;
