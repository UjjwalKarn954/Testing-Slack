"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpn_connection.html
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
exports.VpnConnection = exports.VpnConnectionVgwTelemetry = exports.VpnConnectionRoutes = void 0;
var cdktf = require("cdktf");
var VpnConnectionRoutes = /** @class */ (function (_super) {
    __extends(VpnConnectionRoutes, _super);
    function VpnConnectionRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VpnConnectionRoutes.prototype, "destinationCidrBlock", {
        // destination_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoutes.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoutes.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return VpnConnectionRoutes;
}(cdktf.ComplexComputedList));
exports.VpnConnectionRoutes = VpnConnectionRoutes;
var VpnConnectionVgwTelemetry = /** @class */ (function (_super) {
    __extends(VpnConnectionVgwTelemetry, _super);
    function VpnConnectionVgwTelemetry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "acceptedRouteCount", {
        // accepted_route_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('accepted_route_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "lastStatusChange", {
        // last_status_change - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_status_change');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "outsideIpAddress", {
        // outside_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outside_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionVgwTelemetry.prototype, "statusMessage", {
        // status_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_message');
        },
        enumerable: false,
        configurable: true
    });
    return VpnConnectionVgwTelemetry;
}(cdktf.ComplexComputedList));
exports.VpnConnectionVgwTelemetry = VpnConnectionVgwTelemetry;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}
*/
var VpnConnection = /** @class */ (function (_super) {
    __extends(VpnConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionConfig
    */
    function VpnConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._customerGatewayId = config.customerGatewayId;
        _this._enableAcceleration = config.enableAcceleration;
        _this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        _this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        _this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        _this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        _this._staticRoutesOnly = config.staticRoutesOnly;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transitGatewayId = config.transitGatewayId;
        _this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
        _this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
        _this._tunnel1IkeVersions = config.tunnel1IkeVersions;
        _this._tunnel1InsideCidr = config.tunnel1InsideCidr;
        _this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
        _this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
        _this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
        _this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
        _this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
        _this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
        _this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
        _this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
        _this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
        _this._tunnel1PresharedKey = config.tunnel1PresharedKey;
        _this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
        _this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
        _this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
        _this._tunnel1StartupAction = config.tunnel1StartupAction;
        _this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
        _this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
        _this._tunnel2IkeVersions = config.tunnel2IkeVersions;
        _this._tunnel2InsideCidr = config.tunnel2InsideCidr;
        _this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
        _this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
        _this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
        _this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
        _this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
        _this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
        _this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
        _this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
        _this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
        _this._tunnel2PresharedKey = config.tunnel2PresharedKey;
        _this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
        _this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
        _this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
        _this._tunnel2StartupAction = config.tunnel2StartupAction;
        _this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        _this._type = config.type;
        _this._vpnGatewayId = config.vpnGatewayId;
        return _this;
    }
    Object.defineProperty(VpnConnection.prototype, "arn", {
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
    Object.defineProperty(VpnConnection.prototype, "customerGatewayConfiguration", {
        // customer_gateway_configuration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_gateway_configuration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "customerGatewayId", {
        get: function () {
            return this.getStringAttribute('customer_gateway_id');
        },
        set: function (value) {
            this._customerGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "customerGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "enableAcceleration", {
        get: function () {
            return this.getBooleanAttribute('enable_acceleration');
        },
        set: function (value) {
            this._enableAcceleration = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetEnableAcceleration = function () {
        this._enableAcceleration = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "enableAccelerationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableAcceleration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "localIpv4NetworkCidr", {
        get: function () {
            return this.getStringAttribute('local_ipv4_network_cidr');
        },
        set: function (value) {
            this._localIpv4NetworkCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetLocalIpv4NetworkCidr = function () {
        this._localIpv4NetworkCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "localIpv4NetworkCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localIpv4NetworkCidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "localIpv6NetworkCidr", {
        get: function () {
            return this.getStringAttribute('local_ipv6_network_cidr');
        },
        set: function (value) {
            this._localIpv6NetworkCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetLocalIpv6NetworkCidr = function () {
        this._localIpv6NetworkCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "localIpv6NetworkCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localIpv6NetworkCidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "remoteIpv4NetworkCidr", {
        get: function () {
            return this.getStringAttribute('remote_ipv4_network_cidr');
        },
        set: function (value) {
            this._remoteIpv4NetworkCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetRemoteIpv4NetworkCidr = function () {
        this._remoteIpv4NetworkCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "remoteIpv4NetworkCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remoteIpv4NetworkCidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "remoteIpv6NetworkCidr", {
        get: function () {
            return this.getStringAttribute('remote_ipv6_network_cidr');
        },
        set: function (value) {
            this._remoteIpv6NetworkCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetRemoteIpv6NetworkCidr = function () {
        this._remoteIpv6NetworkCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "remoteIpv6NetworkCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remoteIpv6NetworkCidr;
        },
        enumerable: false,
        configurable: true
    });
    // routes - computed: true, optional: false, required: false
    VpnConnection.prototype.routes = function (index) {
        return new VpnConnectionRoutes(this, 'routes', index);
    };
    Object.defineProperty(VpnConnection.prototype, "staticRoutesOnly", {
        get: function () {
            return this.getBooleanAttribute('static_routes_only');
        },
        set: function (value) {
            this._staticRoutesOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetStaticRoutesOnly = function () {
        this._staticRoutesOnly = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "staticRoutesOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticRoutesOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "transitGatewayAttachmentId", {
        // transit_gateway_attachment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_attachment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "transitGatewayId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        set: function (value) {
            this._transitGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTransitGatewayId = function () {
        this._transitGatewayId = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "transitGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Address", {
        // tunnel1_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel1_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1BgpAsn", {
        // tunnel1_bgp_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel1_bgp_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1BgpHoldtime", {
        // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tunnel1_bgp_holdtime');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1CgwInsideAddress", {
        // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel1_cgw_inside_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutAction", {
        get: function () {
            return this.getStringAttribute('tunnel1_dpd_timeout_action');
        },
        set: function (value) {
            this._tunnel1DpdTimeoutAction = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1DpdTimeoutAction = function () {
        this._tunnel1DpdTimeoutAction = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1DpdTimeoutAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
        },
        set: function (value) {
            this._tunnel1DpdTimeoutSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1DpdTimeoutSeconds = function () {
        this._tunnel1DpdTimeoutSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1DpdTimeoutSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1DpdTimeoutSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1IkeVersions", {
        get: function () {
            return this.getListAttribute('tunnel1_ike_versions');
        },
        set: function (value) {
            this._tunnel1IkeVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1IkeVersions = function () {
        this._tunnel1IkeVersions = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1IkeVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1IkeVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1InsideCidr", {
        get: function () {
            return this.getStringAttribute('tunnel1_inside_cidr');
        },
        set: function (value) {
            this._tunnel1InsideCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1InsideCidr = function () {
        this._tunnel1InsideCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1InsideCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1InsideCidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1InsideIpv6Cidr", {
        get: function () {
            return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
        },
        set: function (value) {
            this._tunnel1InsideIpv6Cidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1InsideIpv6Cidr = function () {
        this._tunnel1InsideIpv6Cidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1InsideIpv6CidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1InsideIpv6Cidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1DhGroupNumbers", {
        get: function () {
            return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers');
        },
        set: function (value) {
            this._tunnel1Phase1DhGroupNumbers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase1DhGroupNumbers = function () {
        this._tunnel1Phase1DhGroupNumbers = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1DhGroupNumbersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase1DhGroupNumbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1EncryptionAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
        },
        set: function (value) {
            this._tunnel1Phase1EncryptionAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase1EncryptionAlgorithms = function () {
        this._tunnel1Phase1EncryptionAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1EncryptionAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase1EncryptionAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1IntegrityAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
        },
        set: function (value) {
            this._tunnel1Phase1IntegrityAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase1IntegrityAlgorithms = function () {
        this._tunnel1Phase1IntegrityAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1IntegrityAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase1IntegrityAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1LifetimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
        },
        set: function (value) {
            this._tunnel1Phase1LifetimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase1LifetimeSeconds = function () {
        this._tunnel1Phase1LifetimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase1LifetimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase1LifetimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2DhGroupNumbers", {
        get: function () {
            return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers');
        },
        set: function (value) {
            this._tunnel1Phase2DhGroupNumbers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase2DhGroupNumbers = function () {
        this._tunnel1Phase2DhGroupNumbers = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2DhGroupNumbersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase2DhGroupNumbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2EncryptionAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
        },
        set: function (value) {
            this._tunnel1Phase2EncryptionAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase2EncryptionAlgorithms = function () {
        this._tunnel1Phase2EncryptionAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2EncryptionAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase2EncryptionAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2IntegrityAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
        },
        set: function (value) {
            this._tunnel1Phase2IntegrityAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase2IntegrityAlgorithms = function () {
        this._tunnel1Phase2IntegrityAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2IntegrityAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase2IntegrityAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2LifetimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
        },
        set: function (value) {
            this._tunnel1Phase2LifetimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1Phase2LifetimeSeconds = function () {
        this._tunnel1Phase2LifetimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1Phase2LifetimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1Phase2LifetimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1PresharedKey", {
        get: function () {
            return this.getStringAttribute('tunnel1_preshared_key');
        },
        set: function (value) {
            this._tunnel1PresharedKey = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1PresharedKey = function () {
        this._tunnel1PresharedKey = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1PresharedKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1PresharedKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyFuzzPercentage", {
        get: function () {
            return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
        },
        set: function (value) {
            this._tunnel1RekeyFuzzPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1RekeyFuzzPercentage = function () {
        this._tunnel1RekeyFuzzPercentage = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyFuzzPercentageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1RekeyFuzzPercentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyMarginTimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
        },
        set: function (value) {
            this._tunnel1RekeyMarginTimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1RekeyMarginTimeSeconds = function () {
        this._tunnel1RekeyMarginTimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1RekeyMarginTimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1RekeyMarginTimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1ReplayWindowSize", {
        get: function () {
            return this.getNumberAttribute('tunnel1_replay_window_size');
        },
        set: function (value) {
            this._tunnel1ReplayWindowSize = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1ReplayWindowSize = function () {
        this._tunnel1ReplayWindowSize = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1ReplayWindowSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1ReplayWindowSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1StartupAction", {
        get: function () {
            return this.getStringAttribute('tunnel1_startup_action');
        },
        set: function (value) {
            this._tunnel1StartupAction = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel1StartupAction = function () {
        this._tunnel1StartupAction = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel1StartupActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel1StartupAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel1VgwInsideAddress", {
        // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel1_vgw_inside_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Address", {
        // tunnel2_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel2_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2BgpAsn", {
        // tunnel2_bgp_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel2_bgp_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2BgpHoldtime", {
        // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tunnel2_bgp_holdtime');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2CgwInsideAddress", {
        // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel2_cgw_inside_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutAction", {
        get: function () {
            return this.getStringAttribute('tunnel2_dpd_timeout_action');
        },
        set: function (value) {
            this._tunnel2DpdTimeoutAction = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2DpdTimeoutAction = function () {
        this._tunnel2DpdTimeoutAction = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2DpdTimeoutAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
        },
        set: function (value) {
            this._tunnel2DpdTimeoutSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2DpdTimeoutSeconds = function () {
        this._tunnel2DpdTimeoutSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2DpdTimeoutSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2DpdTimeoutSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2IkeVersions", {
        get: function () {
            return this.getListAttribute('tunnel2_ike_versions');
        },
        set: function (value) {
            this._tunnel2IkeVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2IkeVersions = function () {
        this._tunnel2IkeVersions = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2IkeVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2IkeVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2InsideCidr", {
        get: function () {
            return this.getStringAttribute('tunnel2_inside_cidr');
        },
        set: function (value) {
            this._tunnel2InsideCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2InsideCidr = function () {
        this._tunnel2InsideCidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2InsideCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2InsideCidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2InsideIpv6Cidr", {
        get: function () {
            return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
        },
        set: function (value) {
            this._tunnel2InsideIpv6Cidr = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2InsideIpv6Cidr = function () {
        this._tunnel2InsideIpv6Cidr = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2InsideIpv6CidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2InsideIpv6Cidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1DhGroupNumbers", {
        get: function () {
            return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers');
        },
        set: function (value) {
            this._tunnel2Phase1DhGroupNumbers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase1DhGroupNumbers = function () {
        this._tunnel2Phase1DhGroupNumbers = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1DhGroupNumbersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase1DhGroupNumbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1EncryptionAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
        },
        set: function (value) {
            this._tunnel2Phase1EncryptionAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase1EncryptionAlgorithms = function () {
        this._tunnel2Phase1EncryptionAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1EncryptionAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase1EncryptionAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1IntegrityAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
        },
        set: function (value) {
            this._tunnel2Phase1IntegrityAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase1IntegrityAlgorithms = function () {
        this._tunnel2Phase1IntegrityAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1IntegrityAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase1IntegrityAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1LifetimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
        },
        set: function (value) {
            this._tunnel2Phase1LifetimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase1LifetimeSeconds = function () {
        this._tunnel2Phase1LifetimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase1LifetimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase1LifetimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2DhGroupNumbers", {
        get: function () {
            return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers');
        },
        set: function (value) {
            this._tunnel2Phase2DhGroupNumbers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase2DhGroupNumbers = function () {
        this._tunnel2Phase2DhGroupNumbers = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2DhGroupNumbersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase2DhGroupNumbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2EncryptionAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
        },
        set: function (value) {
            this._tunnel2Phase2EncryptionAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase2EncryptionAlgorithms = function () {
        this._tunnel2Phase2EncryptionAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2EncryptionAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase2EncryptionAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2IntegrityAlgorithms", {
        get: function () {
            return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
        },
        set: function (value) {
            this._tunnel2Phase2IntegrityAlgorithms = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase2IntegrityAlgorithms = function () {
        this._tunnel2Phase2IntegrityAlgorithms = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2IntegrityAlgorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase2IntegrityAlgorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2LifetimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
        },
        set: function (value) {
            this._tunnel2Phase2LifetimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2Phase2LifetimeSeconds = function () {
        this._tunnel2Phase2LifetimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2Phase2LifetimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2Phase2LifetimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2PresharedKey", {
        get: function () {
            return this.getStringAttribute('tunnel2_preshared_key');
        },
        set: function (value) {
            this._tunnel2PresharedKey = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2PresharedKey = function () {
        this._tunnel2PresharedKey = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2PresharedKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2PresharedKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyFuzzPercentage", {
        get: function () {
            return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
        },
        set: function (value) {
            this._tunnel2RekeyFuzzPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2RekeyFuzzPercentage = function () {
        this._tunnel2RekeyFuzzPercentage = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyFuzzPercentageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2RekeyFuzzPercentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyMarginTimeSeconds", {
        get: function () {
            return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
        },
        set: function (value) {
            this._tunnel2RekeyMarginTimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2RekeyMarginTimeSeconds = function () {
        this._tunnel2RekeyMarginTimeSeconds = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2RekeyMarginTimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2RekeyMarginTimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2ReplayWindowSize", {
        get: function () {
            return this.getNumberAttribute('tunnel2_replay_window_size');
        },
        set: function (value) {
            this._tunnel2ReplayWindowSize = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2ReplayWindowSize = function () {
        this._tunnel2ReplayWindowSize = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2ReplayWindowSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2ReplayWindowSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2StartupAction", {
        get: function () {
            return this.getStringAttribute('tunnel2_startup_action');
        },
        set: function (value) {
            this._tunnel2StartupAction = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnel2StartupAction = function () {
        this._tunnel2StartupAction = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnel2StartupActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnel2StartupAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnel2VgwInsideAddress", {
        // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel2_vgw_inside_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "tunnelInsideIpVersion", {
        get: function () {
            return this.getStringAttribute('tunnel_inside_ip_version');
        },
        set: function (value) {
            this._tunnelInsideIpVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetTunnelInsideIpVersion = function () {
        this._tunnelInsideIpVersion = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "tunnelInsideIpVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelInsideIpVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnection.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // vgw_telemetry - computed: true, optional: false, required: false
    VpnConnection.prototype.vgwTelemetry = function (index) {
        return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
    };
    Object.defineProperty(VpnConnection.prototype, "vpnGatewayId", {
        get: function () {
            return this.getStringAttribute('vpn_gateway_id');
        },
        set: function (value) {
            this._vpnGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnConnection.prototype.resetVpnGatewayId = function () {
        this._vpnGatewayId = undefined;
    };
    Object.defineProperty(VpnConnection.prototype, "vpnGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpnConnection.prototype.synthesizeAttributes = function () {
        return {
            customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
            local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
            remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
            tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
            tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
            tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
            tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
            tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
            tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
            tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
            tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
            tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
            tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
            tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
            tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
            tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
            tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
            tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
            tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
            tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
            tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
            tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
            tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
            tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
            tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
            tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
            tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
            tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
            tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
            tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
            tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
            tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
            tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
            tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
            tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
            tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
            tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
            tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
            tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktf.stringToTerraform(this._type),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpnConnection.tfResourceType = "aws_vpn_connection";
    return VpnConnection;
}(cdktf.TerraformResource));
exports.VpnConnection = VpnConnection;
