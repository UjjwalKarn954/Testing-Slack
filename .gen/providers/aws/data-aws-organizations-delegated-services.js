"use strict";
// https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html
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
exports.DataAwsOrganizationsDelegatedServices = exports.DataAwsOrganizationsDelegatedServicesDelegatedServices = void 0;
var cdktf = require("cdktf");
var DataAwsOrganizationsDelegatedServicesDelegatedServices = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsDelegatedServicesDelegatedServices, _super);
    function DataAwsOrganizationsDelegatedServicesDelegatedServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsDelegatedServicesDelegatedServices.prototype, "delegationEnabledDate", {
        // delegation_enabled_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('delegation_enabled_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedServicesDelegatedServices.prototype, "servicePrincipal", {
        // service_principal - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_principal');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsDelegatedServicesDelegatedServices;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsDelegatedServicesDelegatedServices = DataAwsOrganizationsDelegatedServicesDelegatedServices;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services}
*/
var DataAwsOrganizationsDelegatedServices = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsDelegatedServices, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedServicesConfig
    */
    function DataAwsOrganizationsDelegatedServices(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_delegated_services',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        return _this;
    }
    Object.defineProperty(DataAwsOrganizationsDelegatedServices.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedServices.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    // delegated_services - computed: true, optional: false, required: false
    DataAwsOrganizationsDelegatedServices.prototype.delegatedServices = function (index) {
        return new DataAwsOrganizationsDelegatedServicesDelegatedServices(this, 'delegated_services', index);
    };
    Object.defineProperty(DataAwsOrganizationsDelegatedServices.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOrganizationsDelegatedServices.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOrganizationsDelegatedServices.tfResourceType = "aws_organizations_delegated_services";
    return DataAwsOrganizationsDelegatedServices;
}(cdktf.TerraformDataSource));
exports.DataAwsOrganizationsDelegatedServices = DataAwsOrganizationsDelegatedServices;
