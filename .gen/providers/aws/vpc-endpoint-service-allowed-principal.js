"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html
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
exports.VpcEndpointServiceAllowedPrincipal = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal}
*/
var VpcEndpointServiceAllowedPrincipal = /** @class */ (function (_super) {
    __extends(VpcEndpointServiceAllowedPrincipal, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceAllowedPrincipalConfig
    */
    function VpcEndpointServiceAllowedPrincipal(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._principalArn = config.principalArn;
        _this._vpcEndpointServiceId = config.vpcEndpointServiceId;
        return _this;
    }
    Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "id", {
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
    Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "principalArn", {
        get: function () {
            return this.getStringAttribute('principal_arn');
        },
        set: function (value) {
            this._principalArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "principalArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "vpcEndpointServiceId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_service_id');
        },
        set: function (value) {
            this._vpcEndpointServiceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServiceAllowedPrincipal.prototype, "vpcEndpointServiceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointServiceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcEndpointServiceAllowedPrincipal.prototype.synthesizeAttributes = function () {
        return {
            principal_arn: cdktf.stringToTerraform(this._principalArn),
            vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpointServiceAllowedPrincipal.tfResourceType = "aws_vpc_endpoint_service_allowed_principal";
    return VpcEndpointServiceAllowedPrincipal;
}(cdktf.TerraformResource));
exports.VpcEndpointServiceAllowedPrincipal = VpcEndpointServiceAllowedPrincipal;
