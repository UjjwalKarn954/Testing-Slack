"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html
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
exports.Route53ResolverQueryLogConfig = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html aws_route53_resolver_query_log_config}
*/
var Route53ResolverQueryLogConfig = /** @class */ (function (_super) {
    __extends(Route53ResolverQueryLogConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html aws_route53_resolver_query_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverQueryLogConfigConfig
    */
    function Route53ResolverQueryLogConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_query_log_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinationArn = config.destinationArn;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "arn", {
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
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "destinationArn", {
        get: function () {
            return this.getStringAttribute('destination_arn');
        },
        set: function (value) {
            this._destinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "destinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "shareStatus", {
        // share_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverQueryLogConfig.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverQueryLogConfig.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53ResolverQueryLogConfig.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverQueryLogConfig.prototype.synthesizeAttributes = function () {
        return {
            destination_arn: cdktf.stringToTerraform(this._destinationArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverQueryLogConfig.tfResourceType = "aws_route53_resolver_query_log_config";
    return Route53ResolverQueryLogConfig;
}(cdktf.TerraformResource));
exports.Route53ResolverQueryLogConfig = Route53ResolverQueryLogConfig;
