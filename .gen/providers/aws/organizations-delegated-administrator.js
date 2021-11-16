"use strict";
// https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html
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
exports.OrganizationsDelegatedAdministrator = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator}
*/
var OrganizationsDelegatedAdministrator = /** @class */ (function (_super) {
    __extends(OrganizationsDelegatedAdministrator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator.html aws_organizations_delegated_administrator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsDelegatedAdministratorConfig
    */
    function OrganizationsDelegatedAdministrator(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_delegated_administrator',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._servicePrincipal = config.servicePrincipal;
        return _this;
    }
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "delegationEnabledDate", {
        // delegation_enabled_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('delegation_enabled_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "joinedMethod", {
        // joined_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "joinedTimestamp", {
        // joined_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "servicePrincipal", {
        get: function () {
            return this.getStringAttribute('service_principal');
        },
        set: function (value) {
            this._servicePrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "servicePrincipalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._servicePrincipal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsDelegatedAdministrator.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationsDelegatedAdministrator.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            service_principal: cdktf.stringToTerraform(this._servicePrincipal)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationsDelegatedAdministrator.tfResourceType = "aws_organizations_delegated_administrator";
    return OrganizationsDelegatedAdministrator;
}(cdktf.TerraformResource));
exports.OrganizationsDelegatedAdministrator = OrganizationsDelegatedAdministrator;
