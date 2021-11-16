"use strict";
// https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html
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
exports.GameliftAlias = void 0;
var cdktf = require("cdktf");
function gameliftAliasRoutingStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fleet_id: cdktf.stringToTerraform(struct.fleetId),
        message: cdktf.stringToTerraform(struct.message),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias}
*/
var GameliftAlias = /** @class */ (function (_super) {
    __extends(GameliftAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftAliasConfig
    */
    function GameliftAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_gamelift_alias',
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
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._routingStrategy = config.routingStrategy;
        return _this;
    }
    Object.defineProperty(GameliftAlias.prototype, "arn", {
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
    Object.defineProperty(GameliftAlias.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftAlias.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GameliftAlias.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftAlias.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GameliftAlias.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftAlias.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GameliftAlias.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "routingStrategy", {
        get: function () {
            return this.interpolationForAttribute('routing_strategy');
        },
        set: function (value) {
            this._routingStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftAlias.prototype, "routingStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routingStrategy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GameliftAlias.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            routing_strategy: cdktf.listMapper(gameliftAliasRoutingStrategyToTerraform)(this._routingStrategy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GameliftAlias.tfResourceType = "aws_gamelift_alias";
    return GameliftAlias;
}(cdktf.TerraformResource));
exports.GameliftAlias = GameliftAlias;
