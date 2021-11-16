"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html
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
exports.DataAwsServicequotasServiceQuota = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota}
*/
var DataAwsServicequotasServiceQuota = /** @class */ (function (_super) {
    __extends(DataAwsServicequotasServiceQuota, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasServiceQuotaConfig
    */
    function DataAwsServicequotasServiceQuota(scope, id, config) {
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
        _this._quotaName = config.quotaName;
        _this._serviceCode = config.serviceCode;
        return _this;
    }
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "adjustable", {
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
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "defaultValue", {
        // default_value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "globalQuota", {
        // global_quota - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('global_quota');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "quotaCode", {
        get: function () {
            return this.getStringAttribute('quota_code');
        },
        set: function (value) {
            this._quotaCode = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicequotasServiceQuota.prototype.resetQuotaCode = function () {
        this._quotaCode = undefined;
    };
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "quotaCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quotaCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "quotaName", {
        get: function () {
            return this.getStringAttribute('quota_name');
        },
        set: function (value) {
            this._quotaName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicequotasServiceQuota.prototype.resetQuotaName = function () {
        this._quotaName = undefined;
    };
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "quotaNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quotaName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "serviceCode", {
        get: function () {
            return this.getStringAttribute('service_code');
        },
        set: function (value) {
            this._serviceCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "serviceCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "serviceName", {
        // service_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasServiceQuota.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsServicequotasServiceQuota.prototype.synthesizeAttributes = function () {
        return {
            quota_code: cdktf.stringToTerraform(this._quotaCode),
            quota_name: cdktf.stringToTerraform(this._quotaName),
            service_code: cdktf.stringToTerraform(this._serviceCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicequotasServiceQuota.tfResourceType = "aws_servicequotas_service_quota";
    return DataAwsServicequotasServiceQuota;
}(cdktf.TerraformDataSource));
exports.DataAwsServicequotasServiceQuota = DataAwsServicequotasServiceQuota;
