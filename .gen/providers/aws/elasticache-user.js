"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_user.html
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
exports.ElasticacheUser = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user}
*/
var ElasticacheUser = /** @class */ (function (_super) {
    __extends(ElasticacheUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserConfig
    */
    function ElasticacheUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_user',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessString = config.accessString;
        _this._engine = config.engine;
        _this._noPasswordRequired = config.noPasswordRequired;
        _this._passwords = config.passwords;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userId = config.userId;
        _this._userName = config.userName;
        return _this;
    }
    Object.defineProperty(ElasticacheUser.prototype, "accessString", {
        get: function () {
            return this.getStringAttribute('access_string');
        },
        set: function (value) {
            this._accessString = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "accessStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "noPasswordRequired", {
        get: function () {
            return this.getBooleanAttribute('no_password_required');
        },
        set: function (value) {
            this._noPasswordRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUser.prototype.resetNoPasswordRequired = function () {
        this._noPasswordRequired = undefined;
    };
    Object.defineProperty(ElasticacheUser.prototype, "noPasswordRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noPasswordRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "passwords", {
        get: function () {
            return this.getListAttribute('passwords');
        },
        set: function (value) {
            this._passwords = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUser.prototype.resetPasswords = function () {
        this._passwords = undefined;
    };
    Object.defineProperty(ElasticacheUser.prototype, "passwordsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUser.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticacheUser.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUser.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticacheUser.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "userId", {
        get: function () {
            return this.getStringAttribute('user_id');
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "userIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUser.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticacheUser.prototype.synthesizeAttributes = function () {
        return {
            access_string: cdktf.stringToTerraform(this._accessString),
            engine: cdktf.stringToTerraform(this._engine),
            no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
            passwords: cdktf.listMapper(cdktf.stringToTerraform)(this._passwords),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_id: cdktf.stringToTerraform(this._userId),
            user_name: cdktf.stringToTerraform(this._userName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheUser.tfResourceType = "aws_elasticache_user";
    return ElasticacheUser;
}(cdktf.TerraformResource));
exports.ElasticacheUser = ElasticacheUser;
