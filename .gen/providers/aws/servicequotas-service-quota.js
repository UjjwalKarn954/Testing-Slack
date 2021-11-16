"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html
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
exports.ServicequotasServiceQuota = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html aws_servicequotas_service_quota}
*/
var ServicequotasServiceQuota = /** @class */ (function (_super) {
    __extends(ServicequotasServiceQuota, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html aws_servicequotas_service_quota} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicequotasServiceQuotaConfig
    */
    function ServicequotasServiceQuota(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicequotas_service_quota',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._quotaCode = config.quotaCode;
        _this._serviceCode = config.serviceCode;
        _this._value = config.value;
        return _this;
    }
    Object.defineProperty(ServicequotasServiceQuota.prototype, "adjustable", {
        // ==========
        // ATTRIBUTES
        // ==========
        // adjustable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('adjustable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "defaultValue", {
        // default_value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "quotaCode", {
        get: function () {
            return this.getStringAttribute('quota_code');
        },
        set: function (value) {
            this._quotaCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "quotaCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quotaCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "quotaName", {
        // quota_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('quota_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "requestId", {
        // request_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "requestStatus", {
        // request_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "serviceCode", {
        get: function () {
            return this.getStringAttribute('service_code');
        },
        set: function (value) {
            this._serviceCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "serviceCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "serviceName", {
        // service_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicequotasServiceQuota.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicequotasServiceQuota.prototype.synthesizeAttributes = function () {
        return {
            quota_code: cdktf.stringToTerraform(this._quotaCode),
            service_code: cdktf.stringToTerraform(this._serviceCode),
            value: cdktf.numberToTerraform(this._value)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicequotasServiceQuota.tfResourceType = "aws_servicequotas_service_quota";
    return ServicequotasServiceQuota;
}(cdktf.TerraformResource));
exports.ServicequotasServiceQuota = ServicequotasServiceQuota;
