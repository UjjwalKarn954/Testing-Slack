"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html
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
exports.ElasticacheUserGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group}
*/
var ElasticacheUserGroup = /** @class */ (function (_super) {
    __extends(ElasticacheUserGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupConfig
    */
    function ElasticacheUserGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_user_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._engine = config.engine;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userGroupId = config.userGroupId;
        _this._userIds = config.userIds;
        return _this;
    }
    Object.defineProperty(ElasticacheUserGroup.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUserGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticacheUserGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUserGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticacheUserGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "userGroupId", {
        get: function () {
            return this.getStringAttribute('user_group_id');
        },
        set: function (value) {
            this._userGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "userGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheUserGroup.prototype, "userIds", {
        get: function () {
            return this.getListAttribute('user_ids');
        },
        set: function (value) {
            this._userIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheUserGroup.prototype.resetUserIds = function () {
        this._userIds = undefined;
    };
    Object.defineProperty(ElasticacheUserGroup.prototype, "userIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userIds;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticacheUserGroup.prototype.synthesizeAttributes = function () {
        return {
            engine: cdktf.stringToTerraform(this._engine),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_group_id: cdktf.stringToTerraform(this._userGroupId),
            user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._userIds)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheUserGroup.tfResourceType = "aws_elasticache_user_group";
    return ElasticacheUserGroup;
}(cdktf.TerraformResource));
exports.ElasticacheUserGroup = ElasticacheUserGroup;
