"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html
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
exports.ElasticacheSecurityGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group}
*/
var ElasticacheSecurityGroup = /** @class */ (function (_super) {
    __extends(ElasticacheSecurityGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheSecurityGroupConfig
    */
    function ElasticacheSecurityGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_security_group',
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
        _this._securityGroupNames = config.securityGroupNames;
        return _this;
    }
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheSecurityGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "securityGroupNames", {
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        set: function (value) {
            this._securityGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheSecurityGroup.prototype, "securityGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticacheSecurityGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheSecurityGroup.tfResourceType = "aws_elasticache_security_group";
    return ElasticacheSecurityGroup;
}(cdktf.TerraformResource));
exports.ElasticacheSecurityGroup = ElasticacheSecurityGroup;
