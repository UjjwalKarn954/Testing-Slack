"use strict";
// https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html
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
exports.RdsClusterRoleAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association}
*/
var RdsClusterRoleAssociation = /** @class */ (function (_super) {
    __extends(RdsClusterRoleAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterRoleAssociationConfig
    */
    function RdsClusterRoleAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_cluster_role_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbClusterIdentifier = config.dbClusterIdentifier;
        _this._featureName = config.featureName;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "dbClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_identifier');
        },
        set: function (value) {
            this._dbClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "dbClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "featureName", {
        get: function () {
            return this.getStringAttribute('feature_name');
        },
        set: function (value) {
            this._featureName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "featureNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._featureName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterRoleAssociation.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RdsClusterRoleAssociation.prototype.synthesizeAttributes = function () {
        return {
            db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
            feature_name: cdktf.stringToTerraform(this._featureName),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RdsClusterRoleAssociation.tfResourceType = "aws_rds_cluster_role_association";
    return RdsClusterRoleAssociation;
}(cdktf.TerraformResource));
exports.RdsClusterRoleAssociation = RdsClusterRoleAssociation;
