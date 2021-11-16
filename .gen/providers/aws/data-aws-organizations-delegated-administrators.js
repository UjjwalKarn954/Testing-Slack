"use strict";
// https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html
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
exports.DataAwsOrganizationsDelegatedAdministrators = exports.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators = void 0;
var cdktf = require("cdktf");
var DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators, _super);
    function DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "delegationEnabledDate", {
        // delegation_enabled_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('delegation_enabled_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "joinedMethod", {
        // joined_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "joinedTimestamp", {
        // joined_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators = DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators}
*/
var DataAwsOrganizationsDelegatedAdministrators = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsDelegatedAdministrators, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedAdministratorsConfig = {}
    */
    function DataAwsOrganizationsDelegatedAdministrators(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_delegated_administrators',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._servicePrincipal = config.servicePrincipal;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // delegated_administrators - computed: true, optional: false, required: false
    DataAwsOrganizationsDelegatedAdministrators.prototype.delegatedAdministrators = function (index) {
        return new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators(this, 'delegated_administrators', index);
    };
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministrators.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministrators.prototype, "servicePrincipal", {
        get: function () {
            return this.getStringAttribute('service_principal');
        },
        set: function (value) {
            this._servicePrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOrganizationsDelegatedAdministrators.prototype.resetServicePrincipal = function () {
        this._servicePrincipal = undefined;
    };
    Object.defineProperty(DataAwsOrganizationsDelegatedAdministrators.prototype, "servicePrincipalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._servicePrincipal;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOrganizationsDelegatedAdministrators.prototype.synthesizeAttributes = function () {
        return {
            service_principal: cdktf.stringToTerraform(this._servicePrincipal)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOrganizationsDelegatedAdministrators.tfResourceType = "aws_organizations_delegated_administrators";
    return DataAwsOrganizationsDelegatedAdministrators;
}(cdktf.TerraformDataSource));
exports.DataAwsOrganizationsDelegatedAdministrators = DataAwsOrganizationsDelegatedAdministrators;
