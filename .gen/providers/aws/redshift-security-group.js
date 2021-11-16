"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html
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
exports.RedshiftSecurityGroup = void 0;
var cdktf = require("cdktf");
function redshiftSecurityGroupIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        security_group_name: cdktf.stringToTerraform(struct.securityGroupName),
        security_group_owner_id: cdktf.stringToTerraform(struct.securityGroupOwnerId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group}
*/
var RedshiftSecurityGroup = /** @class */ (function (_super) {
    __extends(RedshiftSecurityGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSecurityGroupConfig
    */
    function RedshiftSecurityGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_security_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._ingress = config.ingress;
        return _this;
    }
    Object.defineProperty(RedshiftSecurityGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftSecurityGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RedshiftSecurityGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSecurityGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSecurityGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSecurityGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSecurityGroup.prototype, "ingress", {
        get: function () {
            return this.interpolationForAttribute('ingress');
        },
        set: function (value) {
            this._ingress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftSecurityGroup.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RedshiftSecurityGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            ingress: cdktf.listMapper(redshiftSecurityGroupIngressToTerraform)(this._ingress)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftSecurityGroup.tfResourceType = "aws_redshift_security_group";
    return RedshiftSecurityGroup;
}(cdktf.TerraformResource));
exports.RedshiftSecurityGroup = RedshiftSecurityGroup;
