"use strict";
// https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html
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
exports.QuicksightGroupMembership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership}
*/
var QuicksightGroupMembership = /** @class */ (function (_super) {
    __extends(QuicksightGroupMembership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightGroupMembershipConfig
    */
    function QuicksightGroupMembership(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_quicksight_group_membership',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsAccountId = config.awsAccountId;
        _this._groupName = config.groupName;
        _this._memberName = config.memberName;
        _this._namespace = config.namespace;
        return _this;
    }
    Object.defineProperty(QuicksightGroupMembership.prototype, "arn", {
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
    Object.defineProperty(QuicksightGroupMembership.prototype, "awsAccountId", {
        get: function () {
            return this.getStringAttribute('aws_account_id');
        },
        set: function (value) {
            this._awsAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightGroupMembership.prototype.resetAwsAccountId = function () {
        this._awsAccountId = undefined;
    };
    Object.defineProperty(QuicksightGroupMembership.prototype, "awsAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "memberName", {
        get: function () {
            return this.getStringAttribute('member_name');
        },
        set: function (value) {
            this._memberName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "memberNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightGroupMembership.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightGroupMembership.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(QuicksightGroupMembership.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    QuicksightGroupMembership.prototype.synthesizeAttributes = function () {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            group_name: cdktf.stringToTerraform(this._groupName),
            member_name: cdktf.stringToTerraform(this._memberName),
            namespace: cdktf.stringToTerraform(this._namespace)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    QuicksightGroupMembership.tfResourceType = "aws_quicksight_group_membership";
    return QuicksightGroupMembership;
}(cdktf.TerraformResource));
exports.QuicksightGroupMembership = QuicksightGroupMembership;
