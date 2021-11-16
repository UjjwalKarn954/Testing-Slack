"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html
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
exports.S3OutpostsEndpoint = exports.S3OutpostsEndpointNetworkInterfaces = void 0;
var cdktf = require("cdktf");
var S3OutpostsEndpointNetworkInterfaces = /** @class */ (function (_super) {
    __extends(S3OutpostsEndpointNetworkInterfaces, _super);
    function S3OutpostsEndpointNetworkInterfaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(S3OutpostsEndpointNetworkInterfaces.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    return S3OutpostsEndpointNetworkInterfaces;
}(cdktf.ComplexComputedList));
exports.S3OutpostsEndpointNetworkInterfaces = S3OutpostsEndpointNetworkInterfaces;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint}
*/
var S3OutpostsEndpoint = /** @class */ (function (_super) {
    __extends(S3OutpostsEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3OutpostsEndpointConfig
    */
    function S3OutpostsEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3outposts_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._outpostId = config.outpostId;
        _this._securityGroupId = config.securityGroupId;
        _this._subnetId = config.subnetId;
        return _this;
    }
    Object.defineProperty(S3OutpostsEndpoint.prototype, "arn", {
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
    Object.defineProperty(S3OutpostsEndpoint.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "creationTime", {
        // creation_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // network_interfaces - computed: true, optional: false, required: false
    S3OutpostsEndpoint.prototype.networkInterfaces = function (index) {
        return new S3OutpostsEndpointNetworkInterfaces(this, 'network_interfaces', index);
    };
    Object.defineProperty(S3OutpostsEndpoint.prototype, "outpostId", {
        get: function () {
            return this.getStringAttribute('outpost_id');
        },
        set: function (value) {
            this._outpostId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "outpostIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "securityGroupId", {
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        set: function (value) {
            this._securityGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "securityGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3OutpostsEndpoint.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3OutpostsEndpoint.prototype.synthesizeAttributes = function () {
        return {
            outpost_id: cdktf.stringToTerraform(this._outpostId),
            security_group_id: cdktf.stringToTerraform(this._securityGroupId),
            subnet_id: cdktf.stringToTerraform(this._subnetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3OutpostsEndpoint.tfResourceType = "aws_s3outposts_endpoint";
    return S3OutpostsEndpoint;
}(cdktf.TerraformResource));
exports.S3OutpostsEndpoint = S3OutpostsEndpoint;
